var app = require('express')();
var port = process.env.PORT;
app.listen(port);

app.get('/', function(req, res) {
    res.send('hello world');
});

app.get('/test', function(req, res) {
    res.send('test render');
});

app.get('/user/:id', function(req, res) {
    res.send('user: ' + req.params.id);
});

app.get('/:number', function(req, res) {
    res.send('number: ' + req.params.number);
});

// REGX style
//https://workspaceName-accountName.c9users.io/ip/10.20.30.40
app.get(/^\/ip?(?:\/(\d{2,3})(?:\.(\d{2,3}))(?:\.(\d{2,3}))(?:\.(\d{2,3})))?/, function(req, res){                                                                                            
  res.send(req.params);
});

console.log('start express server\n');
