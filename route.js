var http = require('http');

http.createServer(function(req, res){
	//приводим url к единому виду путем удаления
	//строки запроса необязательной косой черты
	//в конце строки и преведем к нижнему регистру
	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	switch(path){
		case '':
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Homepage');
		break;

		case '/about':
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('About');
		break;

		default:
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.end('Не найдено');
		break;
	}
}).listen(3000);

console.log('Сервер запущен на 3000 порту');