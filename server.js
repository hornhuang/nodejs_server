var http = require('http')

var url = require('url')

var fs = require('fs')
// NodeJS 自带模块，用于获取后缀名
var path = require('path')

var mimeModel = require('./model/getmimefromfile.js')


// http服务，网页访问时调用
var app = http.createServer(function(req, res){

    var pathname = url.parse(req.url).pathname
    // 判断路由是否为：http://127.0.0.1:8000/ 这种，如果是赋值为主页 home.html 后面显示
    if(pathname == '/'){

        pathname = '/home.html'

    }

    // 获取文件后缀名，便于返回 css javascript 对象时，是对应的 Content-Type
    var extname = path.extname(pathname)

    var dirname = 'htmls'
    if(extname == '.html'){
        dirname = 'htmls'
    }else if(extname == '.css'){
        dirname = 'csses'
    }else if(extname == '.jpg' || extname == '.png' || extname == '.jpeg'){
        dirname = 'pictures'
    }else if(extname == '.apk'){
        dirname = 'csses'
    }else if(extname == '.js'){
        dirname = 'js'
    }else{
        dirname = 'others'
    }

    console.log('the dirname is -> ' + dirname)

    fs.readFile(dirname + pathname,function(err, data){

        console.log('the pathname is -> ' + pathname)

        if(err){
            // 找不到界面时，返回 404
            fs.readFile('htmls/404.html',function(err, data){

                if(err){
                    console.log('lost 404 page')
                    return 
                }

                res.writeHead(200, {"Content-Type":"text/html;charset='utf-8'"})
    
                res.write(data)
    
                res.end()

            })

        }else {
            //返回所搜索的界面
            var mime = mimeModel.getMime(fs, extname)

            console.log('the mime is -> ' + mime)

            res.writeHead(200, {"Content-Type":"" + mime + ";charset='utf-8'"})

            res.write(data)

            res.end()
        }

    })
    
})

app.listen(3000,'127.0.0.1')