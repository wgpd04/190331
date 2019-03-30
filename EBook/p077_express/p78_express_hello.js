var app = require('express')();
var port = process.env.PORT;
app.listen(port);
app.get('/', function(req, res) {
    res.send('hello world');
});
console.log('start express server\n');
