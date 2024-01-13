const fs = require('fs');

const rs = fs.createReadStream('./bigFile.txt');

rs.on('data', chunk => console.log(chunk))

rs.on('end', () => console.log('No more content to read...'))









