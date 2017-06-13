//зависимости в package.json
//посмотреть файл package.json что внутри
//тут еще должен быть package.json
// var pkg = require('./package.json')
// var deps = pkg.dependencies;
// for(var key in deps){
// console.log(deps);
// }

// console.log(deps);


  // var package = require('./package.json')
  // for (var key in package.dependencies){
  //   console.log(key + ': ' + package.dependencies[key]);
  // }

var package = require('./package.json') 
//0 
for (var key in package) { 
console.log(key + ': ' + package[key]); 
} 
//1 
console.log (package.dependencies); 
// //add 
// console.log (package.scripts);