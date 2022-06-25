const inquirer = require("inquirer"); 
const db = require("mysql2"); 
const connection = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    database: "management_db"
}); 
const cTable = require("console.table"); 

const viewEmployees = connection.query("SELECT * FROM employees", (err, result) => {
    if (err) {
        console.log(err); 
    }
    console.table(result); 
});

const updateRole = () => {
    connection.query("SELECT first_name, last_name FROM employees", (err, result) => {
        if (err) {
            console.log(err); 
        }
    let employees = result
    })
    connection.query("UPDATE employees SET  WHERE  ")
}; 

const addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "firstName", 
            message: "Enter the first name of the employee you'd like to add."
        }, 
        {
            type: "input", 
            name: "lastName", 
            message: "Enter the last name of the employee you'd like to add."
        }
    ])
    .then(response => {connection.query("INSERT INTO employees (")})
}

const viewRoles = connection.query("SELECT * FROM roles", (err, result) => {
    if (err) {
        console.log(err); 
    }
    console.table(result); 
})

const addRole = connection.query()

const viewDepts = connection.query("SELECT * FROM departments", (err, result) => {
    if (err) {
        console.log(err); 
    }
    console.table(result);
})

const addDept = connection.query()