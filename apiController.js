var connection = require('./dbController');
const result = 'test';
var Todos = function() {
     connection.query('SELECT * FROM todo.todo_sample', function (error, results, fields) {
        if(error)console.log(error)
        if(results)console.log(results)
        // result = 'hello';
        // if(fields)console.log(fields)
        console.log("RESULTS", results)
    return [{ title: "The Guards", author: "Ken Bruen" }];
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
      });
}

module.exports = Todos;
// module.exports= 
// {
//   getTodos : getTodos,
//   result: result 
// };