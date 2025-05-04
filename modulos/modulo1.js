
const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/lab6', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'lab6.html'));
});


router.get('/lab5', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'lab5.html'));
});

module.exports = router;


