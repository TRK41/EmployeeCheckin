const inquirer = require("inquirer");
// const db = require("../EmployeeCheckin/server.js");
const cTable = require("console.table");
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'rootpass',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);

init();

function init() {
    // const logoText = logo({ name: "Employee Checkin"}).render();


    // console.table( db.query[department]);
    // console.table([role]);
    // console.table([employee]);
    loadMainPrompts();
}

function loadMainPrompts() {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "choices",
                message: "What would you like to do?",
                choices: [

                    "View All Departments",
                    "View All Roles",
                    "View All Employees",
                    "Add Department",
                    "Add Roles",
                    "Add Employee",
                    "Update Employee Role",
                    "View All Employees By Department",
                    
                    
                    
                    
                    
                    
                ]

            }
        ]).then(function (answer) {

            switch (answer.choices) {
                case "View All Departments":
                    viewAllDepartment();
                    break;
                case "View All Roles":
                    viewAllRoles();
                    break;
                case "View All Employees":
                    viewEmployee();
                    break;
                case "Add Department":
                    addDepartment();
                    break;
                case "Add Roles":
                    addRoles();
                    break;
                case "Add Employee":
                    addEmployees();
                    break;
                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
                case "View All Employees By Department":
                    viewEmployeesByDepartment();
                    break;
                case "View All Employees By Manager":
                    viewEmployeesByManager();
                    break;
                case "Remove Employee":
                    removeEmployees();
                    break;





            }
        })




}


function viewEmployee() {
    db.query(`SELECT employee.id, employee.first_name, employee.last_name, role.title AS job_title, department.name AS department, role.salary,employee.manager_id AS Manager
            FROM ((Employee
            INNER JOIN Role ON employee.role_id = role.id)
            INNER JOIN Department ON Role.department_id = Department.id)`,
        function (err, results) {
            console.table(results);
            loadMainPrompts();
        })
};

function viewEmployeesByDepartment() {
    db.query(`SELECT Employee.First_name, Employee.Last_name, Department.name 
        FROM ((Employee 
        INNER JOIN Role ON Employee.role_id = Role.id)
        INNER JOIN Department ON Role.department_id = Department.id)`,
        function (err, results) {
            console.table(results);
            loadMainPrompts();
        })
};

// function viewEmployeesByManager() {
//     db.query(`SELECT Employee.First_name, Employee.Last_name, Department.name 
//         FROM (Employee 
//         INNER JOIN Role ON Employee.role_id = Role.id)
//         INNER JOIN Department ON Role.department_id = Department.id);`,
//         function (err, results) {
//             console.table(results);
//             loadMainPrompts();
//         })
// };

function viewAllRoles() {
    db.query(`SELECT Role.id, Role.title, Department.name AS department, Role.salary
            FROM Role
            INNER JOIN Department ON Role.department_id = Department.id`,
        function (err, results) {
            console.table(results);
            loadMainPrompts();
        })
};

function viewAllDepartment() {
    db.query('SELECT id, name AS DEPARTMENT FROM department',
        function (err, results) {
            console.table(results);
            loadMainPrompts();
        })
};
