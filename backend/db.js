const mysql = require('mysql');

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD
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