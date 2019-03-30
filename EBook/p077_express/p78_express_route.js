var app = require('express')();
var port = process.env.PORT;
app.listen(port);

app.get('/', function(req, res) {
    res.send('hello world');
});

app.get('/test', function(req, res) {
    res.send('test render');
});

app.get('/user/', function(req, res) {
    res.send('user page');
});

console.log('start express server\n');
