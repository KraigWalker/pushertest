var express = require('express'),
http = require('http');

var app = express(),
 server = http.createServer(app),
  io = require('socket.io').listen(server);

server.listen(process.env.PORT || 5000)

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

// handle connection event
io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});