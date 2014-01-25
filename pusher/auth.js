var express = require( 'express' );
var Pusher = require( 'pusher' );

var app = express( express.logger() );
app.use( express.bodyParser() );

var pusher = new Pusher( { appId: '64386', key: '5f0a592328baabc35293', secret: '2fe4afb1303c2e2f88f2' } );

app.post( '/pusher/auth', function( req, res ) {
  var socketId = req.body.socket_id;
  var channel = req.body.channel_name;
  var auth = pusher.auth( socketId, channel );
  res.send( auth );
} );

var port = process.env.PORT || 5000;
app.listen( port );