const express = require('express');
const adminData = require('./admin')

const router = express.Router();

router.get('/', (req, res) => {
    res.render("shop", { prods: adminData.products, title: "shop", docTitle: "shop", path: "/" });
})

module.exports = router;