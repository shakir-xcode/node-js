const express = require('express');
const shopController = require('../../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex)

router.get('/products', shopController.getProducts)

router.get('/product/:productId', shopController.getProductDetail)

router.post('/cart', shopController.postAddToCart)

router.get('/orders', shopController.getOrders)

router.get('/checkout', shopController.getCheckout)


module.exports = router;