var express = require('express'); 
var app = express(); 

app.use(express.static(__dirname+'/public'));

app.get('/HeartMonitor', function(req, res){ 
  res.send('Hello;'); 
}); 
app.listen(3000); 
console.log('running on 3000'); 