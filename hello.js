var express =require('express')
var app = express()

// app.get('/',function(req,res){
//     res.send('hello node')
// })
// app.use(express.static('public'))
app.use(express.static('views'))
app.get('views/start.html', function (req, res) {
    res.sendFile( __dirname + "/" + "start.html" );
 })

var server = app.listen(8001,function(){
    var host = server.address().address
    var port = server.address().port

    console.log('demo listening at',host,port)
})