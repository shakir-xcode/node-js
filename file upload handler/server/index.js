const express = require('express');
const path = require('path');
const cors = require('cors');


// Require the upload middleware
const upload = require("./upload.js");
const app = express();


const pathTemp = path.join(__dirname, '..', 'uploads')  //serving static files

console.log("PATH : ", pathTemp);
app.use(express.static(pathTemp));

app.use(cors())


// Set up a route for file uploads
 app.post('/upload', upload.single('file'), (req, res) => {
     // Handle the uploaded file

     res.json({ message: 'File uploaded successfully!' });
 });


// app.post('/upload', upload.single('file'), function (req, res, next) {
//     // req.file is the `avatar` file
//     console.log('file  ----------- : ', req.file)
//     // req.body will hold the text fields, if there were any
//     res.end('received');
// })

app.listen(5500, () => {
    console.log('running 5500 ...')
})