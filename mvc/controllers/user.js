const fs = require('fs');
const path = require('path');

const formFile = path.join(__dirname, '..', 'views', 'index.html');
exports.getForm = (req, res) => {
    // fs.readFile(formFile, (err, fileContent) => {
    //     res.sendFile(fileContent.toString());
    // })
    res.sendFile(formFile);

}