//8
//добавлять и удалять записи

//файлы 8.js, index.html в папке public - форма для заполнения для добавления котов, tom.json - самый главный кот! тут все коты
var express = require('express');
var app = express();
var data = require('./tom.json');
var bodyParser = require('body-parser');

app.get('/records', function(req, res){
  res.json(data);
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
// Почему 2 подключения bodyParser??
// при использовании html страниц, отправляющих запрос
// name=Tom&age=4 - форма закодированного сообщения Urlencoded или json {"name": "Tom","age": 4}
// т.е "Content-Type": "application/json" или application/..../urlencoded

// app.post('/cats', function(req, res){
//   var name = req.body.name;
//   var id = nextId++;
//   var cat = {
//     name: name,
//     id: id
//   };
//   data.push(cat);
//   res.json(cat);
// });

//вариант Никиты - добавление
//заходим localhost:5300 - заполняем форму и вуа-ля!
app.post('/cats', function(req, res) { 
	var name = req.body.name; 
	var id = req.body.id; 
	var cat = { 
	id: id, 
	name: name 
	}; 
	data.push(cat); 
	res.json(cat); 
});

//удаляем котов - localhost:5300/records/1, где 1 - id
app.get('/records/:id', function(req, res){ //DELETE
  try {
    var id = req.params.id;
    console.log('Delete', id);
    var item = data.filter(function(item){
      return item.id == id;
    });
    data.splice(data.indexOf(item), 1);
    res.send('ok');
  //  res.json(subdata);
  }
  catch(e) {
    res.statusCode = 500;
    res.send(e.message);
  }
});

app.listen(5300, function(){
  console.log('App listening on port 5300');
});



app.get('/records/:id', function(req, res){ //DELETE
    var id = req.params.id;
    deleteItem(id, function err() {
      if (err) {
        res.statusCode = 500;
        res.send(err.message);
      }
      res.send(e.message);
    });

function deleteItem(id, callback){
  try {
    var item = data.filter(function(item){
      return item.id == id;
    });
    data.splice(data.indexOf(item), 1);
    res.send('ok');
  //  res.json(subdata);
  }
  catch(e) {
    callback(e);
  }
}
});


//здесь ошибка в 
// var express = require ('express');''
// var app = express();
// var data = require('./data.json');

// app.get('/records', function(req, res){
	
// 	var filter = req.query.filter;
// 	subdata  = data.filter(function(item){
// 		return item.age == filter;
// 	};

// 	var subdata = [];
// 	for(var i = 0l i<data.length; i++){
// 		if(data[i].age == filter)
// 			//закончить
// 	}

// });