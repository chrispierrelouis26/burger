var env = require('dotenv').config();
var express = require("express");
var mysql = require("mysql");
var path = require("path");
var exphbs  = require('express-handlebars');
var db = require("./models");
const PORT = process.env.PORT || 3000;
var app = express();
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
var routes = require("./routes/apiRoute"); //View Router
app.use('/', routes);

db.sequelize.sync({force: false}).then(function(){
    app.listen(PORT, () => {
        console.log(`this app is running on port ${ PORT }`);
    });
});