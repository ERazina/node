//читаем файл

//1txt = название файла
var fs = require("fs");
fs.readFile("1.txt", "utf8", function(error, text) {
  if (error)
    throw error;
  console.log("А в файле том было:", text);
});

//читаем количество строк в файле
var fs = require('fs');
var filename = process.argv[2];
//массив аргументов переданных при запуске

fs.readFile(filename, function(err, data){
	if(err) throw err;
	return data.split('\n') - 1;
});