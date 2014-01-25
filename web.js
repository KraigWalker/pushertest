// web.js
var express = require("express");
var logfmt = require("logfmt");
var Pusher = require('pusher-client');
var app = express();

var appId = '64386';
var key = '5f0a592328baabc35293';
var secret = '2fe4afb1303c2e2f88f2';
var allowedHost = process.env.ALLOWED_HOST;

var pusher = new Pusher( { appId: appId, key: key, secret: secret } );

var app = express( express.logger() );
app.use( express.bodyParser() );

var allowCrossDomain = function(req,res, next) {
	res.header('Access-Control-Allow-Origin', allowedHost);
	next();
};
app.use( allowCrossDomain );

app.post('/pusher/auth', function(request, response) {

	console.log(request.body);

	var channelName = request.body.channel_name;
	var socketId = request.body.socket_id;
	var user = JSON.parse( request.body.user );

	var channnelData;

  if(channelName.indexOf('private-') === 0) {
    channelData = null;
  }
  else if(channelName.indexOf('presence-') === 0) {
    channelData = {
      user_id: user.id,
      user_info: { displayName: user.displayName }
    };
  }
  else {
    response.end();
  }

  var auth = pusher.auth(socketId, channelName, channelData);
  console.log(auth);
  response.send(auth);

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