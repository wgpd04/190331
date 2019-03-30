var http = require("http");
console.log("Starting...");
var host = process.env.IP;
var port = process.env.PORT;
var server = http.createServer( function (request, response) {
	console.log("Got a request: " + request.url);
	response.writeHead(200, {"Content-type": "text/plain"});
	response.end("Hello! I'm a Node.JS server.");
});

server.listen(port, host, function () {
	console.log("Listening...");
});
