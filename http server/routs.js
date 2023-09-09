const http = require('http');

const server = http.createServer((req, res)=>{
	const url = req.url;

	if(url === '/') 
		res.write('Home page');
	
	else if(url === '/contact') 
		res.write('contact page');
	
	else 
		res.write('Page not found..');
	res.end();
})

server.listen(4000);






