const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>This is homePage</h1><a href="/form">Form</a>');
})

module.exports = router;