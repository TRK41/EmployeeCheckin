const {prompt} = require("inquirer");
const db = require("./db/seeds.sql");
const cTable = require("console.table");

init();

function init(){
    // const logoText = logo({ name: "Employee Checkin"}).render();

    // console.log(logoText);
    console.table([department]);
    console.table([role]);
    console.table([employee]);
    loadMainPrompts();
}

function loadMainPrompts() {
    prompt([
        {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
            {
                name: "View All Employees",
                value: "VIEW_EMPLOYEES"

            },
            {
                name: "View All Employees By Department",
                value: "VIEW_EMPLOYEES_BY_DEPARTMENT"

            },
            {
                name: "View All Employees By Manager",
                value: "VIEW_EMPLOYEES_BY_MANAGER"

            },
            {
                type:'input',
                name: "Add Employee",
                value: "VIEW_EMPLOYEES"

            },
            {
                type: "choice",
                name: "Remove Employee",
                value: "VIEW_EMPLOYEES"

            },
            {
                name: "Update Employee Role",
                value: "VIEW_EMPLOYEES"

            },
            {
                name: "View All Roles",
                value: "VIEW_ROLES"

            },
            {   
                type:'input',
                name: "Add Roles",
                value: "VIEW_EMPLOYEES"

            },
            {
                name: "View All Departments",
                value: "VIEW_DEPARTMENT"

            },
            {   
                type:'input',
                name: "Add Department",
                value: "VIEW_ROLE"

            },
            
        ]
    
    }
    ]).then(res =>{
      let choice = res.choice;
      
      switch (choice) {
        case "VIEW_EMPLOYEE":
            console.table(viewEmployee());
            break;
        case "VIEW_EMPLOYEES_BY_DEPARTMENT":
            viewEmployeesByDepartment();
            break;
        case "VIEW_EMPLOYEES_BY_MANAGER":
            viewEmployeesByManager();
            break;
        case "ADD_EMPLOYEES":
            addEmployees();
            break;
        case "REMOVE_EMPLOYEES":
            removeEmployees();
            break;
      }
    })
}