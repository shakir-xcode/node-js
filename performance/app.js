const express = require('express');
const cluster = require('cluster');
const os = require('os');

const app = express();

const delay = (duration) => {
	const current = Date.now();
	while(Date.now() - current < duration){}
}

app.get('/', (req, res) => {
	res.send(`root route... PID: ${process.pid}`);
})

app.get('/timer', (req, res) => {
	delay(6000)
	res.send(`timer route... PID: ${process.pid}`);
})

/*
if( cluster.isMaster) {
	console.log('master...')
	cluster.fork();
	cluster.fork();
} else {
	console.log('worker...')
	app.listen(4000, () => console.log('running on 4000'));
}

*/
//app.listen(4000, () => console.log('running on 4000'));

