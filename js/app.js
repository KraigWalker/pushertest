var pusher = new Pusher('5f0a592328baabc35293', { authEndpoint: 'http://mighty-escarpment-2260.herokuapp.com/pusher/auth'});
var channel = pusher.subscribe('my-channel');
// handle success
channel.bind('pusher:subscription_succeeded', function() {
	alert("subscription successful");
});
// handle error
channel.bind('pusher:subscription_error', function() {
	alert("subscription error!");
});

channel.bind("presense-update-slider", function(data){
	alert("value " + data.value);
});

// send a message with the amount to the server
function updateSlider() {
	channel.trigger("presense-update-slider", { value:45 });
	console.log("event sent");
}