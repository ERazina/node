//11. Socket.io
//npm install --save socket.io
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

var server = require('http').createServer(app); //приложение предсатвлено как традиционный http-server
var io = require('socket.io')(server); //чтобы подключить сокет ио нужно подклчюать экспресс в сокет ио можно подключать только сервер полученный из модуля http

server.listen(5300, function(){
  console.log('App listening on port 5300');
});

io.on('connection', function(socket){
    socket.on('chat message', function(text){
        console.log('message: ', + text);
    });
});

//___________________________________
// io.on('connection', function(socket){
//   countConnection +=1;
//   socket.name = 'Client' + id++;
//   console.log('%s is connected.' , socket.name);

//   socket.on('disconnect', function(){
//     countConnection -=1;
//     console.log('Client disconnected');
//   })

//   socket.on('message', function(text){
//     console.log('%s: %s');
//   })
// })