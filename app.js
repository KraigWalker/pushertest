var pusher = new Pusher('5f0a592328baabc35293');
var channel = pusher.subscribe('my-channel');
channel.bind('my-event', function(data) {
	alert('An event was triggered with message: ' + data.message);
});