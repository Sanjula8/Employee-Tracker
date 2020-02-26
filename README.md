# Employee-Tracker

This application proposes a solution for managing a company's employees using node, inquirer, and mySQL.

The database schema contains the below three tables:

-   **department**:

    -   **id** - INT PRIMARY KEY
    -   **name** - VARCHAR(30) to hold department name

-   **role**:

    -   **id** - INT PRIMARY KEY
    -   **title** - VARCHAR(30) to hold role title
    -   **salary** - DECIMAL to hold role salary
    -   **department_id** - INT to hold reference to department role belongs to

-   **employee**:

    -   **id** - INT PRIMARY KEY
    -   **first_name** - VARCHAR(30) to hold employee first name
    -   **last_name** - VARCHAR(30) to hold employee last name
    -   **role_id** - INT to hold reference to role employee has
    -   **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager.

When the command-line is prompted, the below prompts will show up:

**View all employees** - Allows the user to view all employees

**Search for an employee** - Allows the user to search for an employee by last name

**View all departments** - Allows the user to view all deparments

**View all roles** - Allows the user to view all roles

**Add Employee** - Allows the user to add an employee

**Add Department** - Allows the user to add a new department

**Add Role** - Allows the user to add a new role

**Remove Employee** - Allows the user to remove an employee

**Update Employee Role** - Allows the user to update the employee role by using the employee ID

**Exit** - Exits the application
