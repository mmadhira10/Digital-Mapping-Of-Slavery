const express = require('express'); 
const app = express();
const mysql = require("mysql2");
const port = process.env.PORT || 4000;
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise();

async function result () {
  const table = await pool.query("SELECT * FROM locations");
  return table;
}

console.log(result());




// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });

app.listen(port, () => console.log('Listening on Port 3000'));