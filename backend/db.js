const mysql = require('mysql');

const con = mysql.createConnection({
    host: "todo-list-database.carjfn8n4yqj.us-west-2.rds.amazonaws.com",
    user: "admin",
    password: "12345678"
});

con.connect(function(err) {
    if (err) throw err;
    con.query('CREATE DATABASE IF NOT EXISTS todolist;');
    con.query('USE todolist;');
    con.query('CREATE TABLE IF NOT EXISTS tasks(id int NOT NULL AUTO_INCREMENT, item varchar(255), PRIMARY KEY(id));', function(error, result, fields) {
        console.log(result);
    });
    
    con.end();
});