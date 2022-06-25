INSERT INTO `departments` (name)
VALUES ("Sales"), 
       ("Engineering"), 
       ("Finance"), 
       ("Legal"); 

INSERT INTO `roles` (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
       ("Salesperson", 80000, 1),
       ("Lead Engineer", 150000, 2),
       ("Software Engineer", 120000, 2),
       ("Account Manager", 150000, 3), 
       ("Accountant", 125000, 3), 
       ("Legal Team Lead", 200000, 4), 
       ("Lawyer", 190000, 4); 

INSERT INTO `employees` (first_name, last_name, role_id, manager_id)
VALUES ("Rowan", "Berry", 1,  null), 
       ("Harper", "Han", 2, 1), 
       ("Octavia", "Tang", 3, null), 
       ("Tanith", "Brown", 4, 3), 
       ("Tabitha", "Black", 5, null), 
       ("Kaeya", "Wisteria", 6, 5), 
       ("Atticus", "Finch", 7, null), 
       ("Asuka", "Langley", 8, 7); 

