var 'fs' = require ('fs');
var filename1 = process.argv[2];
var filename1 = process.argv[3];
//массив аргументов переданных при запуске

fs.readFile(filename, function(err, data1){
	if(err) throw err;

	
fs.readFile(filename, function(err, data1){
	if(err) throw err;

	var sum = Number(data1) + Number(data2)
	fs.writeFile('output.txt', sum, function(err){
		if (err) throw err;
		console.log('Done');
		});
	});
});