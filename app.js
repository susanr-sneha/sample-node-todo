const http = require('http');
var url = require('url');

var mysql = require('mysql');

var con = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  database: 'todo',
  user: 'root',
  password: 'Perfo@123'
})

con.connect(function(err){
  if(err){
    console.log("ERROR: Failed to connect with database:");
    console.log(err)
  }
  else{
    console.log('Connected to database successfully!!')
  }
});


http.createServer(function (req, res) {
  const reqUrl = url.parse(req.url, true);
 // GET Endpoint
 if (reqUrl.pathname == '/todo' && req.method === 'GET') {
  // console.log('Request Type:' +
  //     req.method + ' Endpoint: ' +
  //     reqUrl.pathname);
  console.log("from DB");
console.log(reqUrl)
      // getTodos();
} 
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  
  }).on('listening', function(){
    console.log("Server is listening...")
  }).listen(1337);

  // http.get('http://localhost:1337/api/todos', function(res){
  //   con.query('SELECT * FROM todo.todo_sample', function (error, results, fields) {
  //     if(error)console.log(error)
  //     if(results)console.log(results)
  //     if(fields)console.log(fields)
  
  //     // error will be an Error if one occurred during the query
  //     // results will contain the results of the query
  //     // fields will contain information about the returned results fields (if any)
  //   });
  // })



 var getTodos =  con.query('SELECT * FROM todo.todo_sample', function (error, results, fields) {
    if(error)console.log(error)
    if(results)console.log(results)
    // if(fields)console.log(fields)

    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  });
 