const db = require('./db/connection');
const Queries = require('./db/queries');

const queries = new Queries();

// Test viewAllDepartments
queries.viewAllDepartments((error, departments) => {
  if (error) {
    console.error(error);
    return;
  }

  console.table(departments);
});

// Test viewAllRoles
queries.viewAllRoles((error, roles) => {
  if (error) {
    console.error(error);
    return;
  }

  console.table(roles);
});

// Test viewAllEmployees
queries.viewAllEmployees((error, employees) => {
  if (error) {
    console.error(error);
    return;
  }

  console.table(employees);
});

// Test addDepartment
const newDepartment = 'Marketing';
queries.addDepartment(newDepartment, (error) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(`Successfully added department: ${newDepartment}`);
});

// Test addRole
const newRole = {
  title: 'Sales Manager',
  salary: 60000,
  departmentId: 1,
};
queries.addRole(newRole.title, newRole.salary, newRole.departmentId, (error) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log('Successfully added role:');
  console.table(newRole);
});

// Test addEmployee
const newEmployee = {
  firstName: 'John',
  lastName: 'Doe',
  roleId: 1,
  managerId: null,
};
queries.addEmployee(newEmployee.firstName, newEmployee.lastName, newEmployee.roleId, newEmployee.managerId, (error) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log('Successfully added employee:');
  console.table(newEmployee);
});
