import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "todolist"
})

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.json("hello this is the backend")
})

app.get("/tasks", (req, res) => {
    const q = "SELECT * FROM items"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/tasks", (req, res) => {
    const q = "INSERT INTO items (`task`) VALUES (?)"
    const values = [req.body.task]

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("Item created successfully.");
    })
})

app.delete("/tasks/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM items WHERE id = ?";

    db.query(q, [bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Item deleted successfully.");
    })
})

app.put("/tasks/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE items SET `task` = ? WHERE id = ?";

    const values = [req.body.task]

    db.query(q, [...values, bookId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Item updated successfully.");
    })
})

app.listen(8800, () => {
    console.log("Connected!");
})