const express = require('express');
const userController = require('../controllers/users');

const router = express.Router();

router.get('/', userController.getUserIndex);
router.get('/about', userController.getUserAbout);

module.exports = router;
