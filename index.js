var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer( function (request, response) {
   fs.readFile(pathname = url.parse(request.url).pathname.substr(1), function (err, data) {
      if (err) {
         response.writeHead(404, {'Content-Type': 'text/html'});}
      else {
         response.writeHead(200, {});
         response.write(data);}
      response.end();});
}).listen(8081);