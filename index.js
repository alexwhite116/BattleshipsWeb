"use strict";
var app = require('./app.js');
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
app.listen(server_port);
