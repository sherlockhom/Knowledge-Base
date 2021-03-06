var fs = require('fs')
// ws=fs.createWriteStream('output.txt','utf-8')
// ws.write('dingxu')

var rs = fs.createReadStream('output.txt')
var ws = fs.createWriteStream('1.txt')
rs.pipe(ws) //pipe()把一个文件流和另一个文件流串起来，这样源文件的所有数据就自动写入到目标文件里了