var connection = require('./dbController');
function getTodos {
    var getTodos =  connection.query('SELECT * FROM todo.todo_sample', function (error, results, fields) {
        if(error)console.log(error)
        if(results)console.log(results)
        // if(fields)console.log(fields)
    
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
      });
}
module.exports = getTodos;