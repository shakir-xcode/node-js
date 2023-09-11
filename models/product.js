const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    '..',
    'data',
    'products.json'
);


module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err)
                products = JSON.parse(fileContent);
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                if (err)
                    console.log('rrrr ', err);
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
}

