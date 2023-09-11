const Product = require('../models/product');

exports.getProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render("shop/product-list", {
            prods: products,
            docTitle: "All Products",
            path: "/products",
        });
    });
}

// --------------

exports.getIndex = (req, res) => {
    Product.fetchAll((products) => {
        res.render("shop/index", {
            prods: products,
            docTitle: "Shop",
            path: "/",
        });
    });
}

exports.getCart = (req, res) => {
    res.render("shop/cart", {
        path: "/cart",
        docTitle: "Cart",
    })
}

exports.getCheckout = (req, res) => {
    res.render("shop/checkout", {
        path: "/checkout",
        docTitle: "Checkout",
    })
}