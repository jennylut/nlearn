
var express = require('express');
var app = express()
require('./routes')(app);
app.set('view engine','html')
app.engine('.html',require('ejs').__express);
app.set('views',require('path').join(__dirname,'views'));
// app.set('port',4001)
app.get('/',function(req,res){
	res.render('register')
})
app.listen(4001)