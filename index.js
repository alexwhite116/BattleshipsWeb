"use strict";
var app = require('./app.js');
var server_port = process.env.OPENSHIFT_NODEJS_PORT
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP

app.listen(server_port, server_ip_address, function(){ 
  console.log("port: " + server_port + ", ip: " + server_ip_address);
});
