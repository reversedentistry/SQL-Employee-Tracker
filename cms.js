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
    connection.query("SELECT first_name, last_name, id FROM employees", (err, result) => {
        if (err) {
            console.log(err);
        }
        let employees = result.map(({ first_name, last_name, id }) => ({name: `${first_name} ${last_name}`, value: id}));
            console.log(employees); 
        inquirer.prompt([
            {
                type: "list", 
                name: "employeeUpdate",
                message: "Which employee's role would you like to change?",
                choices: employees
            }
        ])
        .then(response => {
            let employeeChoice = response.employeeUpdate; 
            console.log(employeeChoice);
            let params = [employeeChoice];
            connection.query("SELECT title, role_id FROM roles", (err, result) => {
                if (err) {
                    console.log(err);
                }
                let roles = result.map(({ title, id }) => ({name: title, value: id}));
                console.log(roles); 
                inquirer.prompt([
                    {
                        type: "list", 
                        name: "roleUpdate", 
                        message: "What is their new role?",
                        choices: roles
                    }
                ])
                .then(response => {
                    let roleChoice = (response.roleUpdate); 
                    params.unshift(roleChoice); 
                    connection.query("UPDATE employees SET role_id = ? WHERE id = ?", params, (err) => {
                        if (err) {
                            console.log(err);
                        } 
                        console.log("Employee updated!");
                })
            })
            
        })
        
    })

})};

const addEmployee = () => {
    inquirer.prompt([
        {
            type: "number",
            name: "id",
            message: "Enter the employee's ID number."
        },
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
        .then(response => { connection.query("INSERT INTO employees (") })
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