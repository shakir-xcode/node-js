const express = require("express");
const fs = require('fs');
const parser = require('body-parser');

const app = express();
const form = fs.readFileSync('./views/index.html').toString();


app.use(parser.urlencoded({ extended: false }))

app.use('/about', (req, res, next) => {
    res.send("<h1>This is about page...</h1>");
})

app.post('/form-data', (req, res) => {
    console.log('req.body : ', req.body)
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    res.send(form);
})

app.listen(4000);