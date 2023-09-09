const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === '/') {
		res.write(fs.readFileSync('../public/index.html'));
		return res.end();
	}

	if (url === '/form-data' && method === "POST") {
		const body = [];
		req.on('data', chunk => {
			console.log('chunk = ', chunk);
			body.push(chunk);
		})
		req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			const message = parsedBody.split('=')[1]
			fs.writeFile('../uploads/form-data.txt', message, err => {
				res.statusCode = 302;
				res.setHeader('Location', '/');
				res.end();
			})
		})

	}
})
server.listen(4000);
