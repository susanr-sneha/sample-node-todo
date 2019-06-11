var dbConfig = require('./dbConfig');
var mysql = require('mysql');

var connection = mysql.createConnection(dbConfig);
connection.connect(function(err){
    if(err){
      console.log("ERROR: Failed to connect with database:");
      console.log(err)
    }
    else{
      console.log('Connected to database successfully!!')
    }
  });
module.exports = connection;