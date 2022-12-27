import express from "express"
import mysql from "mysql"
import cors from "cors"

// const serverless = require('serverless-http');
const app = express()

const con = mysql.createConnection({
    host: "todo-list-database.carjfn8n4yqj.us-west-2.rds.amazonaws.com",
    user: "admin",
    password: "12345678",
})

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
        con.query(`UPDATE todolist.tasks SET item = ${req.query.item} WHERE id = ${req.params.id}`, function(err, result, fields) {
            if (err) res.send(err);
            if (fields) console.log(fields);
        });
    });
})

app.listen(8800, () => {
    console.log("Connected!");
})

// module.exports.handler = serverless(app);