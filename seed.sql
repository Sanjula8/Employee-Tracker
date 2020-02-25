DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR (50),
    PRIMARY KEY (id)

);

INSERT INTO deparment (name) VALUES
('Engineer')
('Sales')
('Marketing')
('Finance')
('Accounting')

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    department_id INT NULL,
    title VARCHAR (30),
    salary DECIMAL (10,2),
    PRIMARY KEY (id)
);

INSERT INTO roles (department_id, title, salary)
VALUES
(1, "Lead Engineer", 150000)
(1, "Software Engineer", 80000)
(2, "Salesperson", 100000)
(2, "Marketing Coordinator", 20000)
(3, "Accountant", 90000)
(4, "CFO", 500000)
(4, "Analyst", 25000)
(5, "Junior Accountant", 40000)


CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR (50),
    last_name VARCHAR (50),
    role_id INT,
    manager_id INT NULL,
    PRIMARY KEY (id)
)