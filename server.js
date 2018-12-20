
//entering my npm packages 
// * Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured. nb
// require('dotenv').config()
var express = require("express");
var app = express();
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

//heroku setting the port
var PORT = process.env.PORT||8080;

app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});
  

//data below
// route to get route

app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
      if (err) {
        throw err;
      }
      console.log('The solution is: ', data);

    //   res.send(data);

      res.render("index", {burgers: data});
    });
  });

  app.post("/" , function(req,res){
      var data = req.body;
      console.log(data);
      connection.query("INSERT INTO burgers (burger_name) VALUES (?) "[data] , function (error,data){})
  })


  app.delete("/", function(req,res){
      var id = req.params.id;
      connection.query("delete from burgers where id =?" [id], function(error,data){
          if(error) throw error;
          res.json(data);
      })
  })
//


// app.use(routes);

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT}`);
});