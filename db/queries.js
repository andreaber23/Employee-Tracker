const db = require("./connection");

class Queries {
    viewAllDepartments(callback) {
        db.query("SELECT id, name FROM department", callback);
    }
    
    addDepartment(departmentName, callback){
        db.query("INSERT INTO department (name) VALUES (?)", [departmentName], callback);
    }
    
    viewAllRoles(callback) {
        db.query("SELECT role.id, role.title, role.salary, department.name AS department FROM role INNER JOIN department ON role.department_id = department.id", callback);
    }

    addRole(title, salary, departmentId, callback) {
        db.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
        [title, salary, departmentId], callback);
    }

    viewAllEmployees(callback) {
        db.query(`SELECT e.id, e.first_name, e.last_name, role.title AS job_title,department.name AS department,role.salary,
        CONCAT(m.first_name, ' ', m.last_name) AS manager
        
        FROM
        employee AS e
        LEFT JOIN role ON e.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        LEFT JOIN employee AS m ON e.manager_id = m.id`, callback);
    }

    addEmployee(firstName, lastName, roleId, managerId, callback) {
        db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", 
        [firstName, lastName, roleId, managerId], callback);
    }
    
    updateEmployee(employeeId, roleId, callback) {
        db.query("UPDATE employee SET role_id = ? WHERE id = ?", [roleId, employeeId], callback);
    }
}

module.exports = Queries;
