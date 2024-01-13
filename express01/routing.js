const express = require('express');
const path = require('path');
const birdRouter = require('./birds');

const app = express();

app.get('/', (req, res) => {
    res.send('to the root route...')
})

app.post('/', (req, res) => {
    res.send({ message: 'post to the root route....' })
})

app.get('/abc', (req, res) => {
    res.send('to abc route...')
})

app.get('/ab?cd', (req, res) => {
    res.send('to acd or abcd route...')
})


// ------------------   Route Params

//  req.params.paramName

app.get('/user/:username/:password', (req, res) => {
    res.send(`username : ${req.params.username}, password : ${req.params.password}`);
})

app.get('/flights/:from-:to', (req, res) => {
    res.send(`flights : form: ${req.params.from}, to : ${req.params.to}`);
})

// -------------------  Query Params

// req.query.paramName

app.get('/queryParam', (req, res, next) => {
    res.send(`Query Parameters<br/>username: ${req.query.username}, password: ${req.query?.password}`);
})



// Route Handlers 

function cb1(req, res, next) {
    console.log('callback 1')
    next();
}


function cb2(req, res, next) {
    console.log('callback 2')
    next();
}

app.get('/handler', cb1, cb2, (req, res) => {
    console.log('callback 3')
    res.send('another hello ...')
})

// Respnose Methods

app.get('/json', (req, res) => {
    res.json({ name: 'shakir', rollno: 8 });
})

app.get('/download', (req, res) => {
    res.download(path.join(__dirname, '..', 'package.json'));
})

app.get('/status', (req, res) => {
    res.sendStatus(200);
})

app.get('/end', (req, res) => {
    res.end();
})


// Express Router

app.use('/birds', birdRouter);


app.listen(4000);