const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log('inside middleware');
    next();     //allows the request to travel to next middlewares
})

app.use((req, res, next) => {
    console.log('inside another middleware');
    res.send('<h1>Hello from Express.js....</h1>')      //send a response
})

app.listen(4000);