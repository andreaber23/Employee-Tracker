const inquirer = require('inquirer');
const Queries = require('./db/queries');
const db = require('./db/connection');

const queries = new Queries();

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    start();
});

function start() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          'Update an employee role',
          'Exit',
        ],
      },
    ])
    .then((answers) => {
      switch (answers.action) {
        case 'View all departments':
          viewAllDepartments();
          break;
        case 'View all roles':
          viewAllRoles();
          break;
        case 'View all employees':
          viewAllEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          updateEmployeeRole();
          break;
        case 'Exit':
          exit();
          break;
      }
    });
}

function viewAllDepartments() {
  queries.viewAllDepartments((err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'departmentName',
        message: 'Enter the name of the department:',
      },
    ])
    .then((answers) => {
      queries.addDepartment(answers.departmentName, (err) => {
        if (err) throw err;
        console.log('Department added successfully!');
        start();
      });
    });
}

function viewAllRoles() {
  queries.viewAllRoles((err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}

function addRole() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'title',
          message: 'Enter the title of the role:',
        },
        {
          type: 'number',
          name: 'salary',
          message: 'Enter the salary for the role:',
        },
        {
          type: 'number',
          name: 'departmentId',
          message: 'Enter the department ID for the role:',
        },
      ])
      .then((answers) => {
        queries.addRole(answers.title, answers.salary, answers.departmentId, (err) => {
          if (err) throw err;
          console.log('Role added successfully!');
          start();
        });
      });
  }
  
function viewAllEmployees() {
  queries.viewAllEmployees((err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
};

function addEmployee() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'firstName',
        message: "Enter the employee's first name:",
      },
      {
        type: 'input',
        name: 'lastName',
        message: "Enter the employee's last name:",
      },
      {
        type: 'number',
        name: 'roleId',
        message: "Enter the employee's role ID:",
      },
      {
        type: 'number',
        name: 'managerId',
        message: "Enter the employee's manager ID:",
      },
    ])
    .then((answers) => {
        queries.addEmployee(
          answers.firstName,
          answers.lastName,
          answers.roleId,
          answers.managerId,
          (err) => {
            if (err) throw err;
            console.log('Employee added successfully!');
            start();
          }
        );
      })
    }
      function updateEmployeeRole() {
        queries.viewAllEmployees((err, employees) => {
          if (err) throw err;
      
          const employeeChoices = employees.map((employee) => ({
            name: `${employee.first_name} ${employee.last_name}`,
            value: employee.id,
          }));
      
          inquirer
            .prompt([
              {
                type: 'list',
                name: 'employeeId',
                message: 'Select an employee to update:',
                choices: employeeChoices,
              },
              {
                type: 'number',
                name: 'roleId',
                message: 'Enter the new role ID for the employee:',
              },
            ])
            .then((answers) => {
              queries.updateEmployee(answers.employeeId, answers.roleId, (err) => {
                if (err) throw err;
                console.log('Employee role updated successfully!');
                start();
              });
            });
        });
      }