var pusher = new Pusher('64386');
var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
	alert('An event was triggered with message: ' + data.message);
});