const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

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
