const multer = require('multer');

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        console.log('original name: ', file.originalname)
        const fileName = Date.now() + '-' + file.originalname;
        cb(null, fileName);
    }
});

// Create the multer instance
const upload = multer({ storage: storage });

module.exports = upload;