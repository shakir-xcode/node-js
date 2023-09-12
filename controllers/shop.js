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

exports.getProductDetail = (req, res) => {
    const productId = req.params.productId;
    Product.getProductDetail(productId, (product) => {
        res.render("shop/product-detail", {
            prod: product,
            path: "/product-detail",
            docTitle: "product detail"
        })
    })

}

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

exports.getOrders = (req, res) => {
    res.render("shop/orders", {
        path: "/orders",
        docTitle: "Your Orders",
    })
}

exports.getCheckout = (req, res) => {
    res.render("shop/checkout", {
        path: "/checkout",
        docTitle: "Checkout",
    })
}

