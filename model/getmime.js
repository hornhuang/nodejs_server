/**
 * 获取后缀名的自定义模块
 */

exports.getMime = function(extname){

    switch(extname){

        case '.html':

            return 'text/html'

        case '.css':

            return 'text/css'

        case '.js':

            return 'text/javascript'

        default:

            return 'text/html'
    }

}