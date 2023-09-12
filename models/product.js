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
}

