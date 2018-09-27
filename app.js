var express = require('express');
var utility = require('utility');
var superagent = require('superagent');
var cheerio = require('cheerio');

var app = express()
var bodyParser = require('body-parser');
 
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.use(express.static('public'));
// app.get('/index.html',function(req,res){
// 	// res.send('hello world')
// 	res.sendFile(__dirname + '/' +'index.html')
// });
// app.get('/',function(req,res){
// 	var q = req.query.q
// 	var md5Value = utility.md5(q)
// 	res.send(md5Value)
// })
app.get('/',function(req,res){
	superagent.get('https://cnodejs.org/')
	.end(function(err,sres){
		if(err){
			return next(error)
		}
		var $ = cheerio.load(sres.text);
		var items =[];
		$('#topic_list .topic_title').each(function(index,element){
			var $element = $(element)
			items.push({
				title:$element.attr('title'),
				href:$element.attr('href')
			});
		});
		res.send(items)
	})
})

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
	console.log('运行环境端口'+host,port)
	console.log('app port 4000')
})