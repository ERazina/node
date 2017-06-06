var 'fs' = require ('fs');
var filename = process.argv[2];
//массив аргументов переданных при запуске

fs.readFile(filename, function(err, data){
	if(err) throw err;
	console.log(data.length);
})

// Запуск
// node index.js lorem.txt