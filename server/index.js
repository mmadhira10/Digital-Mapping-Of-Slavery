const express = require('express'); 
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

const pool = require('./db')

// test
// async function result () {
//     const table = await pool.query("SELECT * FROM locations");
//     console.log(table);
//     return table;
//   }
    
// result();

pool.on('error', console.error.bind(console, 'SQL connection error:'))

app.listen(port, () => console.log('Listening on Port 4000'));