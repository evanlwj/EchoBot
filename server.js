var http = require('http');
var handleRequest = function (req, res) {
  res.writeHead(200);
  res.end('Hello! I am the echo bot!');
};
var www = http.createServer(handleRequest);
www.listen(process.env.PORT || 8080);
