const http = require('http');
var url = require('url');

var mysql = require('mysql');
var dbConnect = require('./dbController');
var apiController = require('./apiController');


http.createServer(function (req, res) {
  console.log(req.method)
  const reqUrl = url.parse(req.url, true);
 // GET Endpoint
 if (reqUrl.pathname == '/todo' && req.method === 'GET') {
  // console.log('Request Type:' +
  //     req.method + ' Endpoint: ' +
  //     reqUrl.pathname);
  console.log("from DB");
console.log(reqUrl)
var results= apiController.getTodos();
console.log("results", apiController.getTodos());
var response = {
  "text":  results
};
} 
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    // res.end(JSON.stringify(response));
    res.end(JSON.stringify(response));

    // res.end('Hello World\n');
  
  }).on('listening', function(){
    console.log("Server is listening...")
  }).listen(1337);

 



 