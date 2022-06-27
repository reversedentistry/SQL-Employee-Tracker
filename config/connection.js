const mysql = require("mysql2");
require("dotenv").config(); 
const connection = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "management_db"
});

module.exports = connection