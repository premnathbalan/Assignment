var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database : 'testcrd'
})
connection.connect();

exports.indexView = function indexView(callback) {
   
    var sqlquery = 'select * from users';
    connection.query(sqlquery, function (err, result) { 
        return callback(result);
    })
}


 exports.create_check = function(users,callback) {
    var sqlinsert= 'INSERT INTO `users` (`id`, `value`) VALUES ('+connection.escape(users.id)+', '+connection.escape(users.name)+')';
    connection.query(sqlinsert, function (err, result) { 
            return callback(result,err);
    })
}

exports.delete_key = function (ids, callback) {
    var sqlquery = 'delete from users where id=' + connection.escape(ids);
    connection.query(sqlquery, function (err, result) {
        return callback(result);
    })
}

 
exports.find_value = function (ids, callback) {
    var sqlquery = 'select * from users where id=' + connection.escape(ids);
    connection.query(sqlquery, function (err, result) {
        return callback(result);
    })
}
 