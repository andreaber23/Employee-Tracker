const mysql = require("mysq12");

const connection =mysql.createConnection(
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 8889,
        user: 'root',
        password:"root",
        database: 'employee_tracker_db'
    }
);

module.export = connection;