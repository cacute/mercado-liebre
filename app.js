const path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT||3000;
app.use(express.static('public'))
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/home.html'));
});
app.listen(port,function(){
    console.log("server on port 3000")
})