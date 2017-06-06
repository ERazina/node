const 'express' = require('express');
var app  = express();
// app.use(express.static(__dirname + '/public'));


var server = require('http').createServer(app); //приложение предсатвлено как традиционный http-server
var io = require('socket.io')(server);//чтобы подключить сокет ио нужно подклчюать экспресс в сокет ио можно подключать только сервер полученный из модуля http

server.listen(3000, function(){
	console.log('server running');
});

var countConnection = 0;
var id = 1;

io.on('connection', function(socket){
	countConnection += 1;
	socket.name = 'Client' + id++;
	console.log('%s is connected', socket.name);
});

socket.on('disconnect', function(){
	countConnection -= 1;
	console.log('%s is disconnected');
});

socket.on('message', function(text){
	console.log("%s: %s", socket.name, text);
	io.emit('message', { // для глобального объъекта генерируем событие - генерируем событие - на все сокеты подписанные на событие message будет выслано сообщение, что на данный сокет будет отослано сообщение
			name: socket.name,
			text: text
	});
});


socket.on('message', function(text){
	console.log("%s: %s", socket.name, text);
	socket.emit('message', text){ // для глобального объъекта генерируем событие - генерируем событие - на все сокеты подписанные на событие message будет выслано сообщение, что на данный сокет будет отослано сообщение

	});
});


// const 'session' = require('express-session');
// const 'bodyparser' = require('body-parser');

// const 'session' = require('express-session');
// const 'session' = require('express-session');
