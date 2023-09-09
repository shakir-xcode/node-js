const express = require("express");

const app = express();

app.use('/', (req, res, next) => {
    if (req.url === '/favicon.ico')
        return res.end();

    console.log('This middleware always runs..');
    next();
})

app.use('/about', (req, res, next) => {
    console.log('route is (about) : ', req.url);
    res.send('<h1>This is about page...</h1>')
})


app.use('/contact', (req, res, next) => {
    console.log('route is (contact) : ', req.url);
    res.send('<h1>This is contact page...</h1>')
})

app.use('/', (req, res, next) => {
    console.log('route is (/) : ', req.url);
    res.send('<h1>Hello from Express.js....</h1>')
})

app.listen(3000);