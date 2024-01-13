const fs = require('fs');

const file = fs.readFileSync('./resultDataset.json');

const newFile = JSON.parse(file);

console.log(newFile.length)

console.log(newFile[113].verses.length)


