var mysql = require("mysql");
var connection = mysql.createConnection({
  host     : "icopoghru9oezxh8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user     : "qk5gyvm53tlnwbeb",
  password :"v3qnpt4bikfvwr33",
  database : "bpyag72n4ffyvrbt"
});
 
connection.connect();
 


module.exports = connection;