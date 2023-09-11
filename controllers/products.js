const Product = require('../models/product');

exports.getAddProducts = (req, res) => {
    res.render("add-product", {
        docTitle: "Add Product",
        path: "/admin/add-product"
    });
}

exports.postAddProducts = (req, res) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render("shop", {
            prods: products,
            title: "shop",
            docTitle: "shop",
            path: "/",
        });
    });

}