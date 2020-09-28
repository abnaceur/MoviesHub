const mysql = require("mysql");
const express = require("express");

const router = express.Router();

//Create Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "hypertube",
  password: "ggtrggty",
  database: "hypertube",
});

//Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
});

router.get("/createDB", (req, res) => {
  let sql = "CREATE DATABASE hypertube";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Database created !");
  });
});
// router.get('/createTable', Table.createTable);

module.exports = router;
