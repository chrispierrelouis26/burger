// var mysql = require("mysql");

// // Necessary info for mysql connection
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: process.env.mysqlpass,
//     database: "burgers_db"
// });

// mysql package
var mysql = require("mysql");

//connecting mysql
var connection = mysql.createConnection({
    host: "localhost",
    port: 1408,
    user: "root",
    password:"root",
    database: "burgers_db"

});

//starting connection to database 
connection.connect(function (err){
    console.log("error connecting: " + err.stack);
    return;
})

//export for orm
module.exports = connection;