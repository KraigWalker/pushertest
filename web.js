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

app.post( '/pusher/auth', function( req, res ) {
  var socketId = req.body.socket_id;
  var channel = req.body.channel_name;
  var presenceData = {
    user_id: 'unique_user_id',
    user_info: {
      name: 'Mr Pusher',
      twitter_id: '@Kraig_Walker'
    }
  };
  var auth = pusher.auth( socketId, channel, presenceData );
  res.send( auth );
} );


var channel = pusher.subscribe('presence-my-channel');

pusher.bind('client-update-slider', function(data){
	// log the recieved value
	console.log('current value ' + data.value);
});

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