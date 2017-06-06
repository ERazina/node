//тайм-сервер
//npm init
//npm install express
//node index.js
//в строке браузера localhost/time
//в строке браузера localhost/time?timezone=+03 - но реализуется через читать из query
//4 задание
var 'express' = require ('express');''
var app = express();



app.get('/time', function(req, res){
	res.send(new Date().localeString());
});

//эхо-сервер
//в строке браузера localhost:5300/echo?say=ksdjfskdfjh
//5 задание
app.get('/echo', function(req, res){
	res.send(req.query.say);
});