var express = require('express');
var app = express();
var port = process.env.PORT||3000;
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hola');
});
app.listen(port,function(){
    console.log("server on port 3000")
})