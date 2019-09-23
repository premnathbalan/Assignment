var model = require('./model');

exports.indexfunction = function (request, reply) {
    model.indexView(function (result) { 
        if(result=='') result= {value:'No Record found'}; 
        return reply.view('index', { result: result });
    })
}



exports.createCheckFunction = function (request, reply) {
    var users = request.payload;
    model.create_check(users, function (result,err) { 
          return reply.redirect('index', { result: result });
    })
}


exports.createVfunction = function (request, reply) {
    var message = request.query.message ? request.query.message : false;
    return reply.view('createForm', { error: message });
}


exports.deletefunction = function (request, reply) {
    var a = request.params.id;
    model.delete_key(a, function (result) {
        return reply.redirect('../index');
    })
}

exports.searchKeyfunction = function (request, reply) {
    var a = request.params.id;
    model.find_value(a, function (result) {
        if(result=='') result= {id:'No Record found'}; 
        return reply.view('view', { result: result });
    })
}
