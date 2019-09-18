exports.getMime = function(fs, extname){

    // fs.readFile('./node_modules/mime.json/index.json', function(err, data){

    //     if(err){

    //         console.log('cannot find index.json \nThe json module for mime')

    //         return false
    //     }

    //     // console.log(data.toString())

    //     var Mimes = JSON.parse(data.toString())

    //     console.log(extname)

    //     // console.log(mime)

    //     // 切割去字符串中的 ‘.’
    //     var regex = '.';
    //     var strAry = extname.split(regex);

    //     return Mimes[strAry[1]] || 'text/html'
    // })

    var data = fs.readFileSync('./node_modules/mime.json/index.json');
    var Mimes = JSON.parse(data.toString())

    // 切割去字符串中的 ‘.’
    var regex = '.';
    var strAry = extname.split(regex);

    return Mimes[strAry[1]] || 'text/html'

}