var express = require('express');
var app = express();

var mongojs = require('mongojs');
var db = mongojs('localhost:27017/heart_monitor', ['diets']);

/*var body_parser = require('body-parser');
app.use(body_parser.json());*/

app.use(express.static(__dirname+'/public'));

app.get('/diseases', function(req, res){
  db.diseases.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  })
});

app.get('/diets', function(req, res){
  db.diets.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  })
});

app.listen(3000);
console.log('running on 3000');
