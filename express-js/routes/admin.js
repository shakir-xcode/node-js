const express = require('express');
const path = require('path');

const products = [];
const router = express.Router();

router.get('/add-product', (req, res) => {
    res.sendFile(path.join(__dirname, "../", "../", "views", "add-product.html"));
})

router.post('/add-product', (req, res) => {
    products.push({ title: req.body.title });
    res.redirect('/');
})



exports.routes = router;
exports.products = products;
