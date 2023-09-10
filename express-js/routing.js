const express = require('express');
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// filter all routes with /admin as first part of the url
app.use(adminRouter);

app.use(userRouter);

app.use((req, res) => {
    res.status(404).send('<h1>Page Not Found...</h1>')
})

app.listen(4000);