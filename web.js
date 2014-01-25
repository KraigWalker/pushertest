// web.js
var express = require("express");
var logfmt = require("logfmt");
var Pusher = require('pusher-client');
var app = express();

var pusher = new Pusher({
  appId: '64386',
  key: '5f0a592328baabc35293',
  secret: '2fe4afb1303c2e2f88f2'
});

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.sendfile('index.html');
});
app.get('/js/app.js', function(req, res) {
	res.sendfile('js/app.js');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});