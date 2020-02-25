DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR (50),
    PRIMARY KEY (id)

);

CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    department_id INT NOT NULL,
    title VARCHAR (30),
    salary DECIMAL (10,2),
    PRIMARY KEY (id)
);


CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR (50),
    last_name VARCHAR (50),
    role_id INT,
    manager_id INT NULL,
    PRIMARY KEY (id)
);


