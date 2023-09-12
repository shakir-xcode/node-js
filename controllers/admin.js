const Product = require('../models/product');

exports.getAddProducts = (req, res) => {
    res.render("admin/add-product", {
        docTitle: "Add Product",
        path: "/admin/add-product"
    });
}

exports.postAddProducts = (req, res) => {
    const { title, description, imageUrl, price } = req.body;
    const product = new Product(title, price, imageUrl, description);
    product.save();
    res.redirect('/products');
}

exports.getProducts = (req, res) => {
    Product.fetchAll((products) => {
        res.render("admin/products", {
            prods: products,
            docTitle: "Admin Products",
            path: "/admin/admin-products",
        });
    });
}