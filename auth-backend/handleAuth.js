const { store } = require('./store');

const USER_VALIDATED = 'user_validated';
const INVALID_CREDENTIALS = 'invalid_credentials';
const USER_ALREADY_EXISTS = 'user_already_exists';


const handleLogin = (loginData, callback) => {
    // check for username and password
    const user = store.find(user => user.username === loginData.username)
    if (user && user.password === loginData.password) {
        callback(isValidUser = true, authMessage = USER_VALIDATED);
        return;
    }
    callback(isValidUser = false, authMessage = INVALID_CREDENTIALS);
}

const handleRegister = (userData, callback) => {
    // validate user data
    // check for existing user
    const user = store.find(user => user.username === userData.username);
    if (user) {
        callback(isValidUser = false, authMessage = USER_ALREADY_EXISTS)
        return;
    }
    store.push(userData);
    callback(isValidUser = true, authMessage = USER_VALIDATED);
}

exports.handleLogin = handleLogin;
exports.handleRegister = handleRegister;