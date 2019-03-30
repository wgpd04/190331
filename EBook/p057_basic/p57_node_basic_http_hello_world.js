var server,
    ip = process.env.IP,
    port = process.env.PORT,
    http = require('http');
    
server = http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World\n');
});

server.listen(port, ip);
console.log("Server running at http://" + ip + ":" + port);
