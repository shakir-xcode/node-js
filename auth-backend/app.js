const express = require('express');
const session = require('express-session');
const cors = require('cors');
const { handleLogin, handleRegister } = require('./handleAuth');
const { store } = require('./store');

const app = express();

app.use(cors());
app.use(express.json());
app.use(session({ secret: 'some secret', resave: false, saveUninitialized: false }));

app.get('/', (req, res, next) => {
    res.send('hello ');
});

app.post('/auth/login', (req, res, next) => {
    console.log('Login : ', req.body);
    const { username, password } = req.body;
    handleLogin({ username, password }, (isValidUser, authMessage) => {
        // console.log('store state: ', store);

        res.send(JSON.stringify({ isValidUser, authMessage }));
    })
});


app.post('/auth/register', (req, res, next) => {
    console.log('Register : ', req.body);
    const { firstName, lastName, username, password } = req.body;
    handleRegister({ firstName, lastName, username, password }, (isValidUser, authMessage) => {
        console.log('store state: ', store);
        res.send(JSON.stringify({ isValidUser, authMessage }));
    })
});


app.listen(4000);

