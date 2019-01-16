var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var urlJson = bodyParser.json({limit:'1mb'})
var urlencodedParser = bodyParser.urlencoded({ extended: true })

 
app.use(express.static('public'));
 
app.get('/register.html', function (req, res) {
   res.sendFile( __dirname + "/views/" + "register.html" );
})
 
// app.get('/register', function (req, res) {
 
//    // 输出 JSON 格式
//    var response = {
//        "name":req.query.name,
//        "password":req.query.password
//    };
//    console.log(response);
//    res.end(JSON.stringify(response));
// })

app.post('/process_post',urlJson,urlencodedParser,function(req,res){
   res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
  console.log(req)
  var response = {
       "name":req.body.name,
       "password":req.body.password
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
 
var server = app.listen(8001, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})