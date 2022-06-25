const inquirer = require("inquirer"); 
const db = require("mysql2"); 
const connection = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    database: "management_db"
}); 
const cTable = require("console.table"); 

inquirer
    .prompt([
        {
            type: "list", 
            name: "cmsChoice", 
            message: "What would you like to do?",
            choices: ["View all employees", "Add employee", "Update employee role", "View all roles", "Add role", "View all departments", "Add department", "Quit"]
        },
    ])
    .then((response) => {
        switch (response.cmsChoice) {
            case "View all employees":
                // Add mysql2 functions here
                break; 
            case "Add employee": 
                break; 
            case "Update employee role": 
                break; 
            case "View all roles": 
                break; 
            case "Add role": 
                break; 
            case "View all departments": 
                break; 
            case "Add department": 
                break; 
            default: 
                break;  
                
        }
    }); 

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

    const addEmployee = connection.query()

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