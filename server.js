const express = require('express');

const app = express();

const delay = (duration) => {
	const current = Date.now();
	while(Date.now() - current < duration){}
}

app.get('/', (req, res) => {
	res.send(`root route... PID: ${process.pid}`);
})

app.get('/timer', (req, res) => {
	delay(10)
	res.send(`timer route... PID: ${process.pid}`);
})

app.listen(4000, () => console.log('running on 4000'));

