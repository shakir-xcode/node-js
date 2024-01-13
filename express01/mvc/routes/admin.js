const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getAdminIndex);
router.get('/about', adminController.getAdminAbout);

module.exports = router;