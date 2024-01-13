
exports.infoOne = 'Info One from logger...'

module.exports.infoTwo = 'Info Two from logger...'

const defMessage = () => {

}

function message() {
	console.log('hello from logger..');
}

const newMessage = () => {
	console.log('new message from logger..');	
}


//exports.loggerMessage = message;
//module.exports.newLoggerMessage = newMessage;
//console.log(module.exports)

export default defMessage;

