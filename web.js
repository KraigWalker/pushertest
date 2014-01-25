var express = require('express');
var app = express(),
// the game's serverside code
ggj = require('./ggj');
server = require('http').createServer(app),
io = require('socket.io').listen(server);

server.listen(process.env.PORT || 5000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});
app.get('/js/app.js', function (req, res) {
  res.sendfile(__dirname + '/app.js');
});

var enableCORS = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
};

app.use(enableCORS);

// handle connection event
io.sockets.on('connection', function (socket) {
	console.log('client connected');
	ggj.initGame(io, socket);
});
