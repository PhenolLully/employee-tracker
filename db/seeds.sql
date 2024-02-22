INSERT INTO department (department_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO role (title, department, salary, department_id)
VALUES ("Sales Lead","Sales", 100000, 1),
       ("Salesperson", "Sales", 80000, 1),
       ("Lead Engineer", "Emgineering", 150000, 2),
       ("Software Engineer", "Engineering", 120000, 2),
       ("Account Manager", "Finance", 160000, 3),
       ("Accountant", "Finance", 125000, 3),
       ("Legal Team Lead", "Legal", 250000, 4);
       ("Lawyer", "Legal", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John","Doe", 1, NULL),
       ("Mike", "Chan", 2, NULL),
       ("Ashley", "Rodriguez", 3, NULL),
       ("Kevin", "Tupik", 4, NULL),
       ("Kunal", "Singh", 5, 1),
       ("Malia", "Brown", 6, 2),
       ("Sarah", "Lourd", 7, 3);
       ("Tom", "Allen", 8, 4);