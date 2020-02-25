const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

async function queryDb() {
	const connection = await mysql.createConnection({
		host: "localhost",

		port: 3306,

		user: "root",

		password: "",

		database: "company_db"
	});
	const [myResults] = connection.query("select * from employees");
	console.table(myResults);
}

// connection.connect(function(err) {
// 	if (err) throw err;
// 	runSearch();
// });

// function runSearch() {}
