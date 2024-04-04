const mysql = require("mysql");
// creating connection to the db using .env parameters
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORTMYSQL,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to the database.");
});
module.exports = db;
