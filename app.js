var http = require('http');
var server = http.createServer();

const port = 1337;

server.on('listening', function(){
  console.log("The server is listening on port "+ port +"...");
}).listen(port);

server.on('request', function(request, response){

});

//https://anasshekhamis.com/2017/10/09/handling-http-requests-using-the-http-module/