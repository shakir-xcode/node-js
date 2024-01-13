const thumbnailator = require('thumbnailator');

const thumbnail = async () => {
    const file = await thumbnailator('../uploads/test.jpg', 'preview.jpg', { thumbnail: true });
    console.log('file type : ', typeof file);
}

module.exports = thumbnail;
