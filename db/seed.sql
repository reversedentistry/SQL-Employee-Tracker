INSERT INTO `departments` (id, name)
VALUES (1, "Sales"), 
       (2, "Engineering"), 
       (3, "Finance"), 
       (4, "Legal"); 

INSERT INTO `roles` (id, title, salary, department_id)
VALUES (1, "Sales Lead", 100000, 1),
       (2, "Salesperson", 80000, 1),
       (3, "Lead Engineer", 150000, 2),
       (4, "Software Engineer", 120000, 2),
       (5, "Account Manager", 150000, 3), 
       (6, "Accountant", 125000, 3), 
       (7, "Legal Team Lead", 200000, 4), 
       (8, "Lawyer", 190000, 4); 

INSERT INTO `employees` (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Rowan", "Berry", 1,  null), 
       (2, "Harper", "Han", 2, 1), 
       (3, "Octavia", "Tang", 3, null), 
       (4, "Tanith", "Brown", 4, 3), 
       (5, "Tabitha", "Black", 5, null), 
       (6, "Kaeya", "Wisteria", 6, 5), 
       (7, "Atticus", "Finch", 7, null), 
       (8, "Asuka", "Langley", 8, 7); 

