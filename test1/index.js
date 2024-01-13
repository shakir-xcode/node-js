const express = require('express');
const cors = require('cors');

const app = express();
//app.use(cors({origin: '*'}))

app.get('/', (req, res) => {
	console.log(res);
	const test = {...req}
	return res.send('hello there...');
})

app.listen(3000, ()=>{
	console.log('server up on 3000');
})













