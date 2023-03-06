const express = require('express'); 
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

const db = require('./db')
db.on('error', console.error.bind(console, 'SQL connection error:'))


// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });

app.listen(port, () => console.log('Listening on Port 4000'));