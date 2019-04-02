var fs = require('fs')
var path = require('path')
var src = 'icons'

fs.readdir(src,function(err,files){
    console.log(files)
    files.forEach(function(filename){
        var oldPath = src +'/'+filename
        var newPath = src+'/'+filename.replace(/_/g,'-')
        console.log(src)
        console.log(oldPath)
        console.log(newPath)
        fs.rename(oldPath,newPath,function(err){
            if(!err){
                console.log(filename,'图片名称中划线替换')
            }
        })

    })


})