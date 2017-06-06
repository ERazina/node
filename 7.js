var 'express' = require ('express');''
var app = express();
var data = require('./data.json');

app.get('/records', function(req, res){
	
	var count = req.query.say;
	var offset = req.query.offset;

	subdata  = data.slice(offset, count);

	res.send(subdata);
});