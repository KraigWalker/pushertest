var pusher = new Pusher('5f0a592328baabc35293');
var channel = pusher.subscribe('presence-my-channel');
// handle success
channel.bind('pusher:subscription_succeeded', function() {
	alert("subscription successful");
});
// handle error
channel.bind('pusher:subscription_error', function() {
	alert("subscription error!");
});

channel.bind("client-update-slider", function(data){
	alert("value " + data.value);
});

// send a message with the amount to the server
function updateSlider() {
	channel.trigger("client-update-slider", { value:45 });
	console.log("event sent");
}