const express = require('express');
const fs = require('fs');

const router = express.Router();
const form = fs.readFileSync('./public/index.html').toString();


router.get('/form', (req, res) => {
    res.send(form);
})

router.post('/form-data', (req, res) => {
    console.log('message data: ', req.body)
    res.redirect('/');
})



module.exports = router;