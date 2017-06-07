//Goal: Get profile info from Teamtreehouse json file and display data on webpage
var router = require('./router.js');

var http = require('http');
http.createServer(function(req, res){
  router.home(req, res);
  router.user(req, res);
}).listen(1337);
console.log('Server running at http://127.0.0.1:1337/');
