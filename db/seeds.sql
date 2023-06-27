INSERT INTO department (name)
VALUES
    ("Finance"),
    ("Legal"),
    ("Engineering"),
    ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES
    ("Salesperson", 80000.00, 01),
    ("Lead Engineer", 150000.00, 02),
    ("Software Engineer", 120000.00, 02),
    ("Account Manager", 160000.00, 03),
    ("Accountant", 125000.00, 03),
    ("Legal Team Lead", 250000.00, 04),
    ("Lawyer", 190000.00, 04);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Mike","Chan", 1, null),
("Ashley", "Rodriguez", 2, null),
("Kevin", "Tupik", 3, 2),
("Kunal", "Singh", 4, null),
("Malia", "Brown", 5, 4),
("Sarah", "Lourd", 6, null),
("Tom", "Allen", 7, 6),
