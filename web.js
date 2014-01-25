// web.js
var express = require("express");
var logfmt = require("logfmt");
var io = require('socket.io').listen(80);
var app = express();

io.sockets.on('connection', function (socket) {
	socket.emit('news', { hello: 'world' });
	socket.on('my other event', function (data) {
		console.log(data);
	});
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});