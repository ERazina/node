var express = require ('express');
var app = express();

//сначала node 6.js
//запуск localhost:5300
//можно положить любые файлы и они будут отображаться



app.use(express.static('public'));
app.listen(5300, function('index'){
	console.log();
});
