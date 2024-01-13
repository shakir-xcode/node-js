const fs = require('fs');

const file = fs.createWriteStream('./bigFile.txt')

for(let i = 0; i < 1000000; i++) 
	file.write('This is a very large file.\n');










