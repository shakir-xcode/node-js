const fs = require('fs');

// By default rs is in PAUSED mode
// so we have to manually call read() 


// rs is switched to FLOWING mode, if
// 'data' event handler is registered
// 'pipe' method is called
// 'resume' method is called

// rs is switched to PAUSED mode, if
// pause() method is called
// unpipe() method is called

const rs = fs.createReadStream('./bigFile.txt', 'utf8');

rs.on('readable', () => {
	let data = rs.read();
	while(data !== null) {
		console.log('chunk: ',data)
		data = rs.read();
	}
})

rs.on('end', () => {
	console.log('data ended...');
})








