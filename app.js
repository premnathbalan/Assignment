var hapi = require('hapi');
var server = new hapi.Server();
var vision = require('vision');
var controller = require('./controller');
server.connection({ port: 8002 });

// server.register(vision, () => { });
server.register(require('inert'), () => { });
server.register(vision, () => { });

server.views({
    engines: {
        html: require('handlebars')
    },
    path: 'public'
});

server.route({
    method: 'GET',
    path: '/',
    handler: controller.indexfunction
});

server.route({
    method: 'GET',
    path: '/index',
    handler: controller.indexfunction
});

server.route({
    method: 'GET',
    path: '/delete/{id}',
    handler: controller.deletefunction
});

server.route({
    method: 'GET',
    path: '/searchKey/{id}',
    handler: controller.searchKeyfunction
});

server.route({
    method: 'GET',
    path: '/create',
    handler: controller.createVfunction
});

server.route({
    method: 'POST',
    path: '/create_check',
    
    handler: controller.createCheckFunction
});

server.start(function () {
    console.log('server started at http://localhost:8002/');
});
