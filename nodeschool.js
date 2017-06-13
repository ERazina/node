var fs = require('fs');
var filename = process.argv[2];
//массив аргументов переданных при запуске

fs.readFile(filename, function(err, data){
	if(err) throw err;
	// console.log(process.stdout);
	var file = process.argv[2].split('\n');
	console.log(file);
	// return data.split('\n') - 1;
});