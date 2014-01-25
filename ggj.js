function hostCreateNewGame() {
	// Create a unique Socket.IO Room
	var thisGameId = (Math.random() * 100000) | 0;

	// return the Room Id (gameId) and the socket ID (my SocketId) to the browser client
	this .emit('newGameCreated', {gameid: thisGameId, mySocketId: this.id});

	// Join the Room and wair for the players
	this.join(thisGameId.toString());
}