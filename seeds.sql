USE company_db;

INSERT INTO department (name) VALUES
('Engineer'),
('Sales'),
('Marketing'),
('Finance'),
('Accounting');

INSERT INTO roles (department_id, title, salary)
VALUES
(1, "Lead Engineer", 150000),
(1, "Software Engineer", 80000),
(2, "Salesperson", 100000),
(2, "Marketing Coordinator", 20000),
(3, "Accountant", 90000),
(4, "CFO", 500000),
(4, "Analyst", 25000),
(5, "Junior Accountant", 40000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Walt', 'Whitman', 3, null),
('Emily', 'Dickinson', 2, null),
('Mark', 'Twain', 1, null),
('F.Scott', 'Fitzgerald', 4, null),
('Ernest', 'Hemingway', 5, null),
('Stephen', 'King', 4, null),
('Harper', 'Lee', 1, null);
