const http = require("http");

const server = http.createServer((req, res)=>{
		res.setHeader('Content-Type', 'text/html');
		res.write(`<pre>${JSON.stringify(req.headers,null,2)}</pre>`);
		res.end();
	})
server.listen(4000);





