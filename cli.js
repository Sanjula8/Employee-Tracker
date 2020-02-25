const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

const connection = mysql.createConnection({
	host: "localhost",

	port: 3306,

	user: "root",

	password: "",

	database: "company_db"
});

connection.connect(function(err) {
	if (err) throw err;
	runSearch();
});

function runSearch() {
	inquirer
		.prompt({
			type: "list",
			name: "action",
			message: "What would you like to do?",
			choices: [
				"View all employees",
				"View all departments",
				"View all managers",
				"Add Employee",
				"Add Department",
				"Add Role",
				"Remove Employee",
				"Update Employee Role",
				"Update Employee Manager",
				"Exit"
			]
		})
		.then(function(answer) {
			console.log(answer.action);
			switch (answer.action) {
				case "View all employees":
					employeeView();
					break;

				case "View all departments":
					departmentView();
					break;
				case "View all managers":
					managerView();
					break;

				case "Add Employee":
					employeeAdd();
					break;
				case "Add Department":
					departmentAdd();
					break;

				case "Add Role":
					roleAdd();
					break;
				case "Remove Employee":
					employeeRemove();
					break;
				case "Exit":
					connection.end();
					break;
			}
		});
}

function employeeView() {
	inquirer
		.prompt({
			name: "employeeView",
			type: "input",
			message: "Search employee by last name:"
		})
		.then(function(answer) {
			var query =
				"SELECT first_name, last_name, id FROM employee WHERE ?";
			connection.query(
				query,
				{ last_name: answer.employeeView },
				function(err, res) {
					for (var i = 0; i < res.length; i++) {
						console.log(
							"First Name: " +
								res[i].first_name +
								" || Last name: " +
								res[i].last_name +
								" || Id: " +
								res[i].id
						);
					}
					runSearch();
				}
			);
		});
}

function employeeAdd() {
	inquirer
		.prompt({
			name: "employeeAdd",
			type: "input",
			message: [
				"To ADD an employee, please enter EMPLOYEE first name and last name"
			]
		})
		.then(function(answer) {
			console.log(answer);
			var str = answer.employeeAdd;
			var firstandLastName = str.split(" ");
			var query = "INSERT INTO employee (first_name, last_name) VALUES ?";
			connection.query(query, [[firstandLastName]], function(err, res) {
				runSearch();
			});
		});
}
