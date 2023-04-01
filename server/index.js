const express = require('express'); 
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');

app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: [`http://localhost:3000`],
  credentials: true
}))
app.use(express.json());

// const pool = require('./db')

// async function result () {
//     const table = await pool.query("SELECT * FROM locations");
//     console.log(table);
//     return table;
//   }
    
// result();

const mapRouter = require("./routes/map-routes");
app.use("/", mapRouter);


app.listen(port, () => console.log('Listening on Port 4000'));