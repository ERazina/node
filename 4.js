//тайм-сервер
//npm init
//npm install express
//node index.js
//в строке браузера localhost/time
//в строке браузера localhost/time?timezone=+03 - но реализуется через читать из query
// //4 задание
// var express = require ('express');''
// var app = express();



// //тайм-сервер
// // app.get('/time', function(req, res){
// // 	res.send(new Date().toLocaleString());
// // }).listen(3000);




// // //эхо-сервер
// // //в строке браузера localhost:5300/echo?say=ksdjfskdfjh
// // //5 задание
// app.get('/echo', function(req, res){
// 	res.send(req.query.say);
// }).listen(3000);

// строка, которую надо вводить
// http://localhost:3000/echo?say=la




//бросаем 6-гранный кубик



//вариант Лизы - работает
var http = require('http');

var server = new http.Server();

server.listen(10002);
console.log("Server is listening 10002");

server.on('request', function (request, response) {
	console.log("------------------");
	console.log(request.method, request.url);

	var x = Math.floor(Math.random() * 6) + 1;
	response.end(String(x));
	console.log("Return: ", String(x));
});

//мой вариант
// // подключаем модуль для http
// var http = require('http');

// //мы создаем экземпляр соединения
// var server = new http.Server();

// //подписка на событие 
// server.listen(3000);
// console.log('сервер на 3000 порту');

// var min = 10;
// var max = 100;

// var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// function parse(numbers){
// 	// использование Math.round() даст неравномерное распределение!
//   return Math.random(numbers);

// 	response.end(String(numbers));
// 	console.log('Return :', String(numbers));
// }

// var x = Math.floor(Math.random() * 610+ 1) * 10;
// console.log(x);