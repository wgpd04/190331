// https://workspaceName-accountName.c9users.io/?a=1&b=2

var server,
    ip = process.env.IP,
    port = process.env.PORT,
    http = require('http'),
    qs = require('querystring'),
    url = require('url');
server = http.createServer(function(req, res) {
    var path = url.parse(req.url),
        parameter = qs.parse(path.query);
    console.dir(parameter);
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('Browser test GET parameter\n');
    res.end();
});
server.listen(port, ip);
console.log("Server running at http://" + ip + ":" + port);
