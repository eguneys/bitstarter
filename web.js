var express = require('express'),
    fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  var buf = fs.readFileSync('index.html');

  var fileContent = buf.toString();
  // response.send('Hello World 2!');
  response.send(fileContent);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
