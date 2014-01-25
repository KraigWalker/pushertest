// web.js
var express = require("express");
var logfmt = require("logfmt");
var Pusher = require('pusher');
var app = express();

var pusher = new Pusher({
  appId: '64386',
  key: '5f0a592328baabc35293',
  secret: '2fe4afb1303c2e2f88f2'
});

app.use(logfmt.requestLogger());

var channel = pusher.subscribe('my-channel');

channel.bind('update-slider', function(data){
	// log the recieved value
	console.log('current value ' + data.value);
});

app.get('/', function(req, res) {
  res.sendfile('index.html');
  // listen for update-slider event

});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});