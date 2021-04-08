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
////////////////////////////////////////////////////////////////////////////////////////////

// ask user if they would like to view, add, or update the departments, roles, employees
function start() {
  inquirer
    .prompt({
      name: "viewAdd",
      type: "list",
      message: "Would you like to [VIEW] [ADD] or [UPDATE] the  departments, roles, employees?",
      choices: ["VIEW", "ADD", "UPDATE"]
    })
    .then(function(answer) {
      // based on the answer, call view, add, or update function
      if (answer.viewAdd === "VIEW") {
        viewData();
      }
      else if(answer.viewAdd === "ADD") {
        addEmployee();
      } 
      else if(answer.viewAdd === "UPDATE") {
        updateEmployee();
    }else{
        connection.end();
      }
    });
}


///////////////////////////////////////////////////////////////////////to add employee
function addEmployee() {
  // prompt for info about the item being put up for auction
  inquirer
    .prompt([
      {
        name: "EmployeeFirst",
        type: "input",
        message: "Please add employee's first name:"
      },
      {
        name: "EmployeeLast",
        type: "input",
        message: "Please add employee's last name:"
      },
      {
        name: "EmployeeRole_id",
        type: "input",
        message: "Please add role id:"
      },
      {
        name: "employeeManager_id",
        type: "input",
        message: "Please add manager id:",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function(answer) {
      // after prompting, add new data into the db 
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.EmployeeFirst,
          last_name: answer.EmployeeFirst,
          role_id: answer.EmployeeRole_id,
          manager_id: answer.EmployeeManager_id,
        },
        function(err) {
          if (err) throw err;
          console.log("Employee data created successfully");
          // re-prompt the user for if they want to view, add or update
          start();
        }
      );
    });
}
//////////////////////////////////////////////////////to view departments, roles, employees
function viewData() {
  inquirer
    .prompt({
      name: "viewAdd",
      type: "list",
      message: "Would you like to view [departments], [roles], [employees]?",
      choices: ["departments", "roles", "employee"]
    }).then(function(answer) {
      if (answer.viewAdd === "departments"){
        connection.query("SELECT * FROM department", function(err, res) {
           if (err) throw err;
           console.table (res);
           start();












          })
        }

  


       
        




                      
        


  // connection.query("SELECT * FROM employee", function(err, res) {
  //   if (err) throw err;
  //   // Log all results of the SELECT statement
  //   console.table(res);
    connection.end(); 
    })
  }
    





//////////////////////////////////////////////////////to update departments, roles, employees

function updateEmployee() {
  console.log("Updating Employee\n");
  var query = connection.query(
    "UPDATE employee SET ? WHERE ?",
    [
      {
        first_name:""
      },
      {
        last_name: ""
      },
      {
        role_id: ""
      },
      {
        manager_id: ""
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " employee updated!\n");
      // view data
      viewData();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}





