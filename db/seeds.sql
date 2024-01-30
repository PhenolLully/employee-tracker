INSERT INTO department (department)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO role (id, title, department, salary, department_id)
VALUES (1, "Sales Lead","Sales", 100000),
       (2, "Salesperson", "Sales", 80000),
       (3, "Lead Engineer", "Emgineering", 150000),
       (4, "Software Engineer", "Engineering", 120000),
       (5, "Account Manager", "Finance", 160000),
       (6, "Accountant", "Finance", 125000),
       (7, "Legal Team Lead", "Legal", 250000);
       (8, "Lawyer", "Legal", 190000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (1, "John","Doe"),
       (2, "Mike", "Chan"),
       (3, "Ashley", "Rodriguez"),
       (4, "Kevin", "Tupik"),
       (5, "Kunal", "Singh"),
       (6, "Malia", "Brown"),
       (7, "Sarah", "Lourd");
       (8, "Tom", "Allen");