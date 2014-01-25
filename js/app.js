var pusher = new Pusher('5f0a592328baabc35293');
var channel = pusher.subscribe('presence-channel');
// handle success
channel.bind('pusher:subscription_succeeded', function() {
	var me = channel.members.me;
	var userId = me.id;
	var userInfo = me.info;
	alert("subscription successful: UserId = " + userId + "userInfo = " + userInfo);

});
// handle error
channel.bind('pusher:subscription_error', function() {
	alert("subscription error!");
});

// send a message with the amount to the server
function updateSlider() {
	channel.trigger("client-update-slider", { value:45 });
	console.log("event sent");
}