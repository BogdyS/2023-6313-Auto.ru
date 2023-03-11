'use strict';
var http = require('http');
var app = require('./app');

var port = process.env.PORT || 1337;

http.createServer(app).listen(port);
