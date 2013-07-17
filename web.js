var express = require('express'),
    fs = require('fs');

var app = express.createServer(express.logger());

app.configure(function () {
    app.use(express.static(__dirname + "/public"));
});

app.get('/', function(request, response) {

  var buf = fs.readFileSync('index.html');

  var fileContent = buf.toString();
  // response.send('Hello World 2!');
  response.send(fileContent);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
