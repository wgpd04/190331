console.log("Starting...");
var fs = require("fs");
var host = process.env.IP;
var port = process.env.PORT;
var express = require("express");

var app = express();

app.get("/", function (request, response) {
	response.send("hello!");
});

app.get("/hello/:text", function (request, response) {
	response.send("Hello!" + request.params.text);
});

app.listen(port, host);
