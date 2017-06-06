//эхо-сервер  - 10 задание

//важно = перезапускать сервер и обновлять страницу!

//дописать html

// в консоли socket.message('client-message, 'sklkdjdkaskjdlkj') - отобразится message
const 'express' = require('express');
var app  = express();
app.use(express.static(__dirname + '/public'));



var server = require('http').createServer(app); //приложение предсатвлено как традиционный http-server
var io = require('socket.io')(server);//чтобы подключить сокет ио нужно подклчюать экспресс в сокет ио можно подключать только сервер полученный из модуля http

server.listen(3000, function(){
	console.log('server running');
});


io.on('connection', function(socket){
socket.on('client-message', function(text){
	console.log('soket says', text);
	socket.emit('server-message', text);
	});
});
