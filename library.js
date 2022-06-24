const inquirer = require("inquirer"); 
const db = require("mysql2"); 
const connection = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    database: "management_db"
}); 

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
            case "Quit": 
                break;
        }
    })