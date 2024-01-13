const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);


module.exports = class Product {
    constructor(title, price, imageUrl, description) {
        this.title = title;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
    }

    save() {
        this.id = Math.random().toString();
        this.cart = false;
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err)
                products = JSON.parse(fileContent);
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                if (err)
                    console.log('Error occured.. ', err);
            })
        })
    }

    static fetchAll(cb) {
        fs.readFile(p, (err, fileContent) => {
            if (err)
                return cb([]);
            cb(JSON.parse(fileContent));
        })
    }

    static getProductDetail(productId, cb) {
        fs.readFile(p, (err, fileContent) => {
            if (err)
                return cb([]);
            const allProds = JSON.parse(fileContent);
            let prod = allProds.find(p => p.id === productId);
            cb(prod);
        })
    }

    static addToCart(productId, cb) {
        fs.readFile(p, (err, fileContent) => {
            if (err)
                return;
            const allProds = JSON.parse(fileContent);
            const updatedProducts = allProds.map(p => {
                if (p.id !== productId)
                    return p;
                return { ...p, cart: true };
            });
            fs.writeFile(p, JSON.stringify(updatedProducts), (err) => {
                if (err)
                    console.log('Error occured.. ', err);
                else
                    cb()
            })
        })
    }

    static getCartProducts(cb) {
        fs.readFile(p, (err, fileContent) => {
            if (err)
                return cb([]);
            const allProds = JSON.parse(fileContent);
            let cartProducts = allProds.filter(p => p.cart === true);
            console.log('cart prods = ', cartProducts)
            cb(cartProducts);
        })
    }
}

