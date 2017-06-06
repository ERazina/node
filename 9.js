

//GET http://localhost:5300/cats
// [
// {
// 	"id":12334,
// 	'name': 'tom'
// }
// {
// 	"id":12334,
// 	'name': 'tom'
// }
// ]
//data меняем на cats

//создание body parser

//DELETE http://localhost:5300/cats:1123
//GET http://localhost:5300/cats:1123

//текст после пустой строки body - после заголовков
//если нужно передать сообщение  - закодировать в json

//изменение

{name: Jacky, age:4}

var 'express' = require ('express');''
var app = express();
var data = require('./data.json');
var bodyparser = require('body-parser');

//создать новый элемент
app.post('./cats', function(req, res){
	var name = req.body.name; //получае из боди парсера
	var id = nextId++;
	cats.push({
		name: name,
		id: id
	});
	cats.push(cat);
	res.json(cat);
});





app.use(bodyParser.urlencoded({extend: true})); //url-encoded  будет разбирать
app.use(bodyParser.json); //json будет разбирать
//клиент должен указывать параметр в каком виде посылает в header указывается url-encoded или application/json

app.get('/records', function(req, res){

res.json(data);

});

app.post('./records', function(req, res){
	res.json(subdata);
})

app.delete('./records/:id', function(req, res){
	try{
	var id = req.params.id;
	console.log('Delete', id);
	var item = data.filter(function(item){
		return item.id == id;
	});
data.splice(data.indexOf(item), 1); //находит точную позицию элемента в массиве //splice - удаляет элемент из массива
res.send('ok');
}
catch(e){
	res.statusCode = 500;
	res.send(e.message);
}
})

app/listen(5300, function(){
	console.log('exapmle');
});



//обновление put - предоставляет в качестве ответа - целиком объект, который будет заменен
//patch - дополняем свойства параметрами из метода patch - лучше его использовать
app.use(bodyParser.urlencoded({extend: true})); //url-encoded  будет разбирать
app.use(bodyParser.json); 
app.patch('/cats/:id', function(req, res){
	var kitten = cats.filter(function(item){
		return item.id == id;
	});
	if(kitten){
		var name = req.body.name; //получае из боди парсера
	}
	kitten.name - name;

	res.json(kitten);}
	else{
		res.status(404)).send();
	}
});
