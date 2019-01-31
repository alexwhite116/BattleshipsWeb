"use strict";
var app = require('./app.js');
var server_port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = 'https://battleshipsgslw37.herokuapp.com'

app.listen(server_port, server_ip_address, function(){ 
  console.log("port: " + server_port + ", ip: " + server_ip_address);
});
