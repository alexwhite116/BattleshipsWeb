"use strict";
var app = require('./app.js');
var server_port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

app.listen(server_port, server_ip_address, function(){ 
  console.log("port: " + server_port + ", ip: " + server_ip_address);
});
