var express = require('express');
var app = express();
var io = require('socket.io');

// serve any file out of the current directory
app.use(express.static(__dirname));

// serve the index.html file by default
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

// pass the express server to socket.io
var io = require('socket.io').listen(app.listen(3000, function() {
    console.log('App listening on port 3000');
}));


var warriors = [
    { id: 1231, name: 'Mr. T', 			wins: 0, image: 'images/mr-t.jpg' },
    { id: 1232, name: 'Chuck Norris', 	wins: 0, image: 'images/chuck-norris.jpg' },
    { id: 1233, name: 'Darth Vader', 	wins: 0, image: 'images/darth-vader.jpg' },
    { id: 1234, name: 'Rocky Balboa', 	wins: 0, image: 'images/rocky-balboa.jpg' },
    { id: 1235, name: 'T2000', 			wins: 0, image: 'images/t2000.jpg' },
    { id: 1236, name: 'Nitro', 			wins: 0, image: 'images/nitro.jpg' }
];

io.on('connection', function(socket){
	console.log('new client connected');
	io.sockets.emit('allWarriorsData', warriors);

	socket.on('warriorSelection', function(payload){
		console.log('warriorSelection', payload);
		var newWarriors = warriors.map(function(warrior){
			if(warrior.id === payload.id) warrior.wins++;
			return warrior;
		});
		io.sockets.emit('allWarriorsData', newWarriors);
		warriors = newWarriors;
	});

});
