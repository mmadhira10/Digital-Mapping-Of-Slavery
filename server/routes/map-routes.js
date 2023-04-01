const express = require('express')
const router = express.Router()
const pool = require('../db');

router.get('/map', async (req, res) => {
    await pool.query("SELECT * FROM locations")
    .then((table) => {
        console.log(table);
        if(!table) {
            res.json({"status": "ERROR"});
            return;
        }

        res.json({table: table});
    });
})


pool.on('error', console.error.bind(console, 'SQL connection error:'))

module.exports = router
