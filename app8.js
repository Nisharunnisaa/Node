/* var fs = require('fs');

var readStream = fs.createReadStream('file.txt');
var data = '';
readStream.on('data', function(chunk){
     data +=chunk;
   /*  console.log('.........................................');
    console.log(chunk.toString('utf8')); 
})  
readStream.on('end', function(chunk){
    console.log(data);
    console.log('-----------------End--------------');
}) */



//or

/* var fs = require('fs');

var readStream = fs.createReadStream('file.txt', 'utf8');     
readStream.on('data', function(chunk){
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log(chunk);
}) */

//or 

var fs = require('fs');
var readStream = fs.createReadStream('file.txt');
readStream.setEncoding('utf8');
var data = '';
readStream.on('data', function(chunk){
      data += chunk;
      console.log(';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;');
      
})

readStream.on('end', function(chunk){
    console.log(data);
    console.log('-----------------END.................');
})