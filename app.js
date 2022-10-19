const path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT||3000;
app.use(express.static(path.resolve(__dirname, 'public')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/home.html'));
});
app.listen(port,function(){
    console.log("server on port 3000")
})