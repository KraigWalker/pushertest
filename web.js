var express = require('express'),
http = require('http');

var app = express(),
 server = http.createServer(app),
  io = require('socket.io').listen(server);

  app.use(function(req, res, next) {
      var oneof = false;
      if(req.headers.origin) {
          res.header('Access-Control-Allow-Origin', req.headers.origin);
          oneof = true;
      }
      if(req.headers['access-control-request-method']) {
          res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
          oneof = true;
      }
      if(req.headers['access-control-request-headers']) {
          res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);
          oneof = true;
      }
      if(oneof) {
          res.header('Access-Control-Max-Age', 60 * 60 * 24 * 365);
      }

      // intercept OPTIONS method
      if (oneof && req.method == 'OPTIONS') {
          res.send(200);
      }
      else {
          next();
      }
  });


server.listen(process.env.PORT || 5000);

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