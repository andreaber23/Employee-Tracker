const db = require("./connection");

class Queries {
    viewAllDepartments() {
        return db.query("SELECT id, name FROM department")
    }
    
    addDepartment(departmentName){
        return db.query("INSERT INTO department (name) VALUES (?)", departmentName);
    }
    
    viewAllRoles() {
        return db.query("SELECT role.id, role.title, role.salary, department.name AS department FROM role INNER JOIN department ON role.department_id = department.id")
    }

    addRole(title, salary, departmentId) {
        return db.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
        [title, salary, departmentId]);
    }

    viewAllEmployees() {
        return db.query(`SELECT e.id, e.first_name, e.last_name, role.title AS job_title,department.name AS department,role.salary,
        CONCAT(m.first_name, ' ', m.last_name) AS manager
        
        FROM
        employee AS e
        LEFT JOIN role ON e.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN employee AS m ON e.manager_id = m.id`);
    }

    addEmployee(firstName, lastName, roleId, managerId) {
        return db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", 
        [firstName, lastName, roleId,managerId]);
    }
    updateEmployee(employeeId, roleId) {
            return db.query("UPDATE employee SET role_id = ? WHERE id = ?"
            [roleId,employeeId]);  
        }
}

module.exports =Queries;