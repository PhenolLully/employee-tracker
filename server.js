const inquirer = require("inquirer");
const express = require("express");
const mysql = require('mysql');
const PORT = process.env.PORT || 3001;
const fs = require("fs");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection({
  host: "127.0.0.1",
  dialect: 'mysql',
  port: 8889,
  dialectOptions: {
  decimalNumbers: true,
      },
  user: 'root',
  password: 'root',
  database: 'tracker_db',
});

app.listen(PORT, () => {
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to the tracker_db database.');
});
});

  async function promptManager(){
    const questions = await inquirer.prompt({
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: [
            "View all employees",
            "Add employee",
            "View all roles",
            "Add role",
            "View all departments",
            "Add department",
            "Quit"
        ]
    });

    if (questions.menu === "View all employees"){
        db.query("SELECT * FROM employee", function (err, result) {
            if (err) throw err;
            console.table(result);
            promptManager();
        });
    } 
    if (questions.menu === "Add employee") {
        const answers = await inquirer.prompt([
            {
                type: "input",
                name: "firstName",
                message: "What is the employee's first name?"
            },
            {
                type: "input",
                name: "lastName",
                message: "What is the employee's last name?"
            },
            {
                type: "input",
                name: "roleId",
                message: "What is the employee's role id?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the employee's manager id?"
            }
        ])
        db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answers.firstName, answers.lastName, answers.roleId, answers.managerId], function (err, result) {
            if (err) throw err;
            console.log("Employee added");
            promptManager();
        });
    }
    if (questions.menu === "View all roles") {
        db.query("SELECT * FROM role", function (err, result) {
            if (err) throw err;
            console.table(result);
            promptManager();
        });
    }
    if (questions.menu === "Add role") {
        const answers = await inquirer.prompt([
            {
                type: "input",
                name: "newRole",
                message: "What is the title of the role?"
            },
            {
                type: "input",
                name: "newSalary",
                message: "What is the salary of the role?"
            },
            {
                type: "input",
                name: "departmentId",
                message: "What is the department id?"
            }
        ])
        db.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answers.newRole, answers.newSalary, answers.departmentId], function (err, result) {
            if (err) throw err;
            console.log("Role added");
            promptManager();
        });

    }
     if (questions.menu === "View all departments") {
        db.query("SELECT * FROM department", function (err, result) {
            if (err) throw err;
            console.table(result);
            promptManager();
        });
    }
     if (questions.menu === "Add department") {
       const answers = await inquirer.prompt({
           type: "input",
           name: "newDepartment",
           message: "What is the name of the department?"
       })
         db.query("INSERT INTO department (department_name) VALUES (?)", answers.newDepartment, function (err, result) {
              if (err) throw err;
              console.log("Department added");
              promptManager();
         });
    } else if (questions.menu === "Quit") {
        
    }
}
promptManager();

