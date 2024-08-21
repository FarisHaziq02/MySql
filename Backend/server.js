const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "faris2222",
    database: "crud2",
    insecureAuth: true

})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
        if (err) { 
            res.json(err);
        } else {
        return res.json(data);
    }

    })
})

app.post("/create", (req, res) => {
    const sql = "INSERT INTO student(name,email,marks,grade,city) VALUES (?)"; // SQL query to insert a new student
            const values = [
                req.body.name, // Get name from request body
                req.body.email,
                req.body.marks, 
                req.body.grade, 
                req.body.city 
            ]
            db.query(sql, [values], (err, data) => { // Execute the query
                if (err) {
                    res.json(err); // Send error response if query fails
                } else {
                    res.json(data); // Send success response with data
                }
            })
        })
        
        app.put("/update/:id", (req, res) => {
            const sql = "UPDATE student SET name = ?, email = ?, marks = ?, grade = ?, city = ? WHERE id = ?";
            const id = req.params.id
            const values = [
                req.body.name,
                req.body.email,
                req.body.marks,
                req.body.grade,
                req.body.city,
                id
            ];
            db.query(sql, [...values, id], (err, data) => { // Execute the query
                if (err) {
                    res.json(err); // Send error response if query fails
                } else {
                    res.json(data); // Send success response with data
                }
            })
        
        })
    
    
        app.delete("/student/:id", (req, res) => {
            const sql = "DELETE FROM student WHERE id = ?";
            const id = req.params.id
            db.query(sql, [id], (err, data) => { // Execute the query
                if (err) {
                    res.json(err); // Send error response if query fails
                } else {
                    res.json(data); // Send success response with data
                }
            })
        })

app.listen (5001, () => {
    console.log("server is running on port 5001");
})