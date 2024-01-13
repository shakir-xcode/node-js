const express = require('express');

const requestTime = (req, res, next) => {
	req.requestTime = Date.now();
	next();
}

const app = express();

app.use(requestTime);

app.get('/', (req, res) => {
	console.log(req.requestTime)
	res.send(`request time: ${req.requestTime}`)
})

app.listen(4000);
