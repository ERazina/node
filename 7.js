var express = require ('express');
var app = express();
var data = require('./data.json');

// app.get('/records', function(req, res){
	
// 	var count = req.query.say;
// 	var offset = req.query.offset;

// 	var subdata  = data.slice(offset, count);

// 	res.send(subdata);
// }).listen(3000);

// console.log('3000 порт');

//Анин вариант
// // var express = reqiure('express');
// var app = express();
// var data = reqiure('./data.json');



//7. Фильтр записей на основе параметров query
// var express = reqiure('express');
// var app = express();
// var data = reqiure('./data.json');

app.get('/records', function(req, res){
  var filter = req.query.filter;
  var name = req.query.name

  var subdata = data.filter(function(item){
    return item.name == filter;
  });
  res.send(subdata);
});

  // var subdata = [];
  // for (var i=0; i<data.length; i++){}
  // if (data[i].date==filter){
  //   subdata.push(data[i])
  // }


app.listen(5300, function(){
  console.log('App listening on port 5300');
});




