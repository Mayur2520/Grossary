var express = require('express');
var path = require('path');
var bodypareser = require('body-parser')
var fs = require('fs');
var routes = require('./lib/routes');

var app = express();

let http = require('http').Server(app);


// Socket setting
let io = require('socket.io')(http);
require('./lib/config/socket.controller')(io);
// Socket setting


app.use(bodypareser.urlencoded({limit:'20mb',extended:true}));
app.use(bodypareser.json({limit:'20mb'}));
	
app.use(express.static(path.join(__dirname,'app')));

routes.configure(app);


var server = app.listen(parseInt(process.env.port),function(){
	console.log('server start on '+ server.address().port+ ' port');
})	

