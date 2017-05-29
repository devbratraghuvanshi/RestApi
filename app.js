
// #1 HTTP inbulit module is use to create an http server
// 1. Require http module
// 2. call create server function on http module
// 3. call listen function to start a server

var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);

var handleequest = function(req, res) {
  if (req.url ==="/") {
    res.write("root Dir");
  }else if (req.url ==="/root1") {
     res.write("root1 Dir");
  } else {
    res.write("root2 Dir");
  }
  res.end();
}

var server = http.createServer(handleequest);
server.listen(8080,function() {
    console.log("server is running on:");
    console.log("http://localhost:8080/");
    console.log("to open in browser Ctr + click on it");
    
});





