INSERT INTO `department` (name)
VALUES ("Sales"), 
       ("Engineering"), 
       ("Finance"), 
       ("Legal"); 

INSERT INTO `role` (id, title, salary, department_id)
VALUES (1, "Sales Lead", 100000, 1),
       (2, "Salesperson", 80000, 1),
       (3, "Lead Engineer", 150000, 2),
       (4, "Software Engineer", 120000, 2),
       (5, "Account Manager", 150000, 3), 
       (6, "Accountant", 125000, 3), 
       (7, "Legal Team Lead", 200000, 4), 
       (8, "Lawyer", 190000, 4); 

INSERT INTO `employee` (first_name, last_name, role_id, manager_id)
VALUES ("Tanith", "Brown", 4,  5), 
       ("Tabitha", "Black", 5, null), 
       ("Asuka", "Langley", 8, 7), 
       ("Rowan", "Barry", 1, null), 
       ("Octavia", "Tang", 3, null), 
       ("Harper", "Han", 2, 4), 
       ("Atticus", "Finch", 7, null), 
       ("Kaeya", "Wisteria", 6, 2); 

