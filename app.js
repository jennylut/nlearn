var express = require('express');
var app = express()
var bodyParser = require('body-parser');
 
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.use(express.static('public'));
app.get('/index.html',function(req,res){
	// res.send('hello world')
	res.sendFile(__dirname + '/' +'index.html')
});

app.post('/',function(req,res){
	console.log(' Hello post')
	res.send('post')
});
app.get('/list',function(req,res){
	res.send('列表页面')
});
var server = app.listen(4000,function(){
	var host = server.address().address
	var port = server.address().port
	console.log(host,port)
	console.log('app is listening at port 4000')
})