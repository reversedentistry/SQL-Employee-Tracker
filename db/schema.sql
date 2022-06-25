DROP DATABASE IF EXISTS management_db; 
CREATE DATABASE management_db; 

USE management_db; 

DROP TABLE IF EXISTS departments; 
DROP TABLE IF EXISTS roles; 
DROP TABLE IF EXISTS employees; 

CREATE TABLE IF NOT EXISTS departments (
    id INT NOT NULL PRIMARY KEY, 
    name VARCHAR(30)
); 

CREATE TABLE IF NOT EXISTS roles (
    id INT NOT NULL PRIMARY KEY, 
    title VARCHAR(30), 
    salary DECIMAL, 
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
    ON DELETE SET NULL
); 

CREATE TABLE IF NOT EXISTS employees (
    id INT NOT NULL PRIMARY KEY, 
    first_name VARCHAR(30), 
    last_name VARCHAR(30), 
    role_id INT, 
    manager_id INT,
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL, 
    FOREIGN KEY (manager_id)
    REFERENCES employees(id)
    ON DELETE SET NULL
);
