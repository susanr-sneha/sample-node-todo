const http = require('http');

var mysql = require('mysql');

var con = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  database: 'todo',
  user: 'root',
  password: 'Creative1234'
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

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  
  }).on('listening', function(){
    console.log("Server is listening...")
  }).listen(1337);