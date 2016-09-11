var express = require('express');
var app = express();
app.get('/', function(req,res){
    res.send('HELLO');

});
app.get('/signup', function(req, res ){
    res.send('signup.html');
});