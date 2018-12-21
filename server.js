
//entering my npm packages 
// * Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured. nb
var db = require("./models");
require('dotenv').config();
var express = require("express");
var app = express();
var exphbs = require("express-handlebars");


//heroku setting the port
var PORT = process.env.PORT||8080;

app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// var mysql = require("mysql");

var router = require ("./routes/apiRoute");

app.use("/" , router);

// app.use(routes)
db.sequelize.sync().then(function() {
  app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT}`);
});
});


