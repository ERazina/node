//здесь ошибка в 
var 'express' = require ('express');''
var app = express();
var data = require('./data.json');

app.get('/records', function(req, res){
	
	var filter = req.query.filter


	subdata  = data.filter(function(item){
return item.age == filter;
	};

	var subdata = [];
	for(var i = 0l i<data.length; i++){
		if(data[i].age == filter)
			//закончить
	}

});