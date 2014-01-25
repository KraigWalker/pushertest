var pusher = new Pusher('5f0a592328baabc35293');
var channel = pusher.subscribe('my-channel');
channel.bind('pusher:subscription_succeeded', function() {
	alert("subscription successful!");
});
	// send a message with the amount to the server
function updateSlider() {
	var triggered = channel.trigger("update-slider", { value:45 });
}