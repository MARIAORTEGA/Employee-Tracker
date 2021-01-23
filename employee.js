var mysql = require("mysql");
var inquirer = require("inquirer");
//////////??????const { start } = require("repl");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Jazz1*di",
  database: "employeeDB"
});

//connect to mysql and start after connection is made
connection.connect(function(err) {
  if (err) throw err;
    start();
});


