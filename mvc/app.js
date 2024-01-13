const express = require('express');
const userRoutes = require('./routes/user');

const app = express();

app.use(userRoutes.router);
// app.post('/form-data', );

app.listen(4000);