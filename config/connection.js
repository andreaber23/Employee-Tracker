const mysql = require("mysql");

const connection =mysql.createConnection(
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 8889,
        use: 'root',
        password:"root",
        database: 'employee_tracker_db'
    }
);

module.export = connection;