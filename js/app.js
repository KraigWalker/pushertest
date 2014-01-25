function() {

    IO {
        All code related to Socket.IO connections goes here.
    }

    App {
        Generic game logic code.

        Host {
            Game logic for the 'Host' (big) screen.
        }

        Player {
            Game logic specific to 'Player' screens.
        }
    }
}
// connect to the server
var socket = io.connect('http://mighty-escarpment-2260.herokuapp.com/');

// when news happens, log the data
socket.on('news', function (data) {
	console.log(data);
	// emit an event back
    socket.emit('my other event', { my: 'data' });
});