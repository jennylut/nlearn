var express =require('express')
var formiadable = require('formidable')
var app = express()
var fs = require('fs')
var http = require('http')

var timestamp = new Date().getTime()

app.use(express.static('views'))
//get的目录是相对于根目录的，不是相对于fileUpload.js这个文件的位置
app.get('views/start.html', function (req, res) {
    console.log(__dirname)
    res.sendFile( __dirname + "/" + "start.html" );
 })

app.post('/upload',function(req,res){
    var form = new formiadable.IncomingForm()
    console.log(form)
    form.parse(req,function(error,fields,files){
        console.log('parsing done')
        console.log(files.upload.path)
        fs.writeFileSync(`common/imgs/${timestamp}.jpg`, fs.readFileSync(files.upload.path))

        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})//设置charset=utf-8 解决中文乱码
        res.write('上传成功！')
        res.end()
       
        // setTimeout(()=>{
        //     res.redirect('upload.html')
        // },200)

    })
})

var server = app.listen(8001,function(){
    var host = server.address().address
    var port = server.address().port

    console.log('demo listening at',host,port)
})