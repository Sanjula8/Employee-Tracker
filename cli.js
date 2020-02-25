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
				"View all roles",
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
					// Finished, tested, working
					employeeView();
					break;

				case "View all departments":
					// Finished, tested, working
					departmentView();
					break;

				case "View all managers":
					// Work in progress, not currently working
					managerView();
					break;

				case "View all roles":
					// Finished, tested, working
					roleView();
					break;

				case "Add Employee":
					// Finished, tested, working
					employeeAdd();
					break;

				case "Add Department":
					// Not working: SYNTAX ERROR?????
					departmentAdd();
					break;

				case "Add Role":
					// Not working: UNDEFINED THINGS???
					roleAdd();
					break;

				case "Update Employee":
					// Not working::ERROR
					employeeUpdate();
					break;

				case "Remove Employee":
					// Not working::ERROR
					employeeRemove();
					break;

				case "Exit":
					connection.end();
					break;
			}
		});
}

// View employees by last name:
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
					if (err) throw err;
					for (var i = 0; i < res.length; i++) {
						console.table(
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

// View all departments:
function departmentView() {
	var query = "SELECT name FROM department";
	connection.query(query, function(err, res) {
		if (err) throw err;
		console.table(res);
	});
}

// function managerView(){
// Not sure what to select from here
// }

// View Roles
function roleView() {
	var query = "SELECT * FROM roles";
	connection.query(query, function(err, res) {
		if (err) throw err;
		console.table(res);
	});
}

// Add Employee
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

// function roleAdd() {
// 	inquirer
// 		.prompt({
// 			name: "roleTite",
// 			type: "input",
// 			message: "Enter a new role name"
// 		})
// 		.then(function(answer) {
// 			var newRoleTitle = answer.roleTitle;

// 			inquirer
// 				.prompt({
// 					name: "roleSalary",
// 					type: "input",
// 					message: "Enter a new salary for the role"
// 				})
// 				.then(function(answer) {
// 					var newSalary = answer.salary;
// 					inquirer
// 						.prompt({
// 							name: "departmentID",
// 							type: "input",
// 							message: ["Enter a new department id for the role"]
// 						})
// 						.then(function(answer) {
// 							var newDepartmentID = answer.departmentID;

// 							console.log(
// 								`title: ${newRoleTitle} salary: ${newSalary} department id: ${newDepartmentID}`
// 							);

// 							var query =
// 								"INSERT INTO role (title, salary, department_id) VALUES ?";
// 							connection.query(
// 								query,
// 								[[[newRoleTitle, newSalary, newDepartmentID]]],
// 								function(err, res) {
// 									if (err) {
// 										console.log(err);
// 									}

// 									runSearch();
// 								}
// 							);
// 						});
// 				});
// 		});
// }

// function departmentAdd() {
// 	inquirer
// 		.prompt({
// 			name: "departmentAdd",
// 			type: "input",
// 			message: "What department would you like to add?"
// 		})
// 		.then(function(answer) {
// 			connection.query(
// 				"INSET INTO department SET ?",
// 				{
// 					department_name: answer.departmentAdd
// 				}
// 				// console.log(`\n Added new department: ${departmentAdd}`)
// 			);
// 			connection.query("SELECT * FROM department", function(err, result) {
// 				if (err) throw err;
// 				console.table(result);
// 				runSearch();
// 			});
// 		});
// }

// ERROR: ID IS NOT DEFINED; NOT WORKING
// function employeeRemove() {
// 	inquirer
// 		.prompt({
// 			name: "employeeRemove",
// 			type: "input",
// 			message: "To REMOVE an employee, please enter the employee ID"
// 		})
// 		.then(function(answer) {
// 			console.log(answer);
// 			var query = "DELETE FROM employee WHERE ?";
// 			var newID = Number(answer.employeeRemove);
// 			console.log(newId);
// 			connection.query(query, { id: newID }, function(err, res) {
// 				runSearch();
// 			});
// 		});
// }

// function employeeUpdate() {
// 	inquirer
// 		.prompt({
// 			name: "employeeUpdate",
// 			type: "input",
// 			message: "Enter employee's ID to update:"
// 		})
// 		.then(function(answer) {
// 			console.log(answer);
// 			var updateID = answer.id;

// 			inquirer
// 				.prompt({
// 					name: "roleID",
// 					type: "input",
// 					message: "Enter the Role ID you want to update to:"
// 				})
// 				.then(function(answer) {
// 					var newroleID = answer.roleId;

// 					var query = "UPDATE employee SET role_id=? WHERE id=?";
// 					connection.query(query, [newroleID, updateID], function(
// 						err,
// 						res
// 					) {
// 						if (err) {
// 							console.log(err);
// 						}
// 						runSearch();
// 					});
// 				});
// 		});
// }
