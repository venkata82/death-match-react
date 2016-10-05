var express = require('express');
var app = express();
var http = require("http").createServer(app);
var io = require('socket.io').listen(http);
var port = 3000;

// serve any file out of the current directory
app.use(express.static(__dirname));

// serve the index.html file by default
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});


var warriors = [
    { id: 1, name: 'Chuck Norris', 	wins: 0, image: 'chuck-norris.jpg' },
    { id: 2, name: 'Mr. T', 		wins: 0, image: 'mr-t.jpg' },
    { id: 3, name: 'Darth Vader', 	wins: 0, image: 'darth-vader.jpg' },
    { id: 4, name: 'Rocky Balboa', 	wins: 0, image: 'rocky-balboa.jpg' },
    { id: 5, name: 'T2000', 		wins: 0, image: 't2000.jpg' },
    { id: 6, name: 'Nitro', 		wins: 0, image: 'nitro.jpg' }
];

io.on('connection', function(socket){
	console.log('new client connected');
	io.sockets.emit('allWarriorsData', warriors);

	socket.on('warriorSelection', function(selectedId){
		console.log('warriorSelection', selectedId);
		var newWarriors = warriors.map(function(warrior){
			if(warrior.id === selectedId) warrior.wins++;
			return warrior;
		});
		io.sockets.emit('allWarriorsData', newWarriors);
		warriors = newWarriors;
	});

});


// start the http server at port defined above
http.listen(port, function() {
    console.log("Server up and running on port:" + port);
});