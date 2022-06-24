const inquirer = require("inquirer"); 

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