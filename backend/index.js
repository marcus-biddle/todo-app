require("dotenv").config();

const mysql = require('mysql');
const cors = require('cors');
const serverless = require('serverless-http');
const express = require('express');
const app = express()

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.json("hello this is the backend")
})

app.get("/tasks", (req, res) => {
    con.connect(function(err) {
        con.query(`SELECT * FROM todolist.tasks`, function(err, result, fields) {
            if (err) res.send(err);
            if (result) res.send(result);
        });
    });
});

app.post("/tasks", (req, res) => {
    if (req.query.item) {
        console.log("Request Received For POST.");
        con.connect(function(err) {
            con.query(`INSERT INTO todolist.tasks (item) VALUES ('${req.query.item}')`, function(err, result, fields) {
                if (err) res.send(err);
                if (result) res.send({item: req.query.item});
                if (fields) console.log(fields);
            });
        });
    } else {
        console.log("Missing parameter.");
    }
});

app.delete("/task/:id", (req, res) => {
    console.log("Request Received For DELETE.");
    con.connect(function(err) {
        con.query(`DELETE FROM todolist.tasks WHERE id = ${req.params.id}`, function(err, result, fields) {
            if (err) res.send(err);
            if (fields) console.log(fields);
        });
    });
});

app.put("/tasks/:id", (req, res) => {
    console.log("Request Received For PUT.");
    con.connect(function(err) {
        con.query(`UPDATE todolist.tasks SET item = '${req.body.item}' WHERE id = ${req.params.id}`, function(err, result, fields) {
            if (err) res.send(err);
            if (fields) console.log(fields);
        });
    });
})

app.listen(8800, () => {
    console.log("Connected!");
})

module.exports.handler = serverless(app);