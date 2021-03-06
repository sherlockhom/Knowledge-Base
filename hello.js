var data='break a log'
var fs = require('fs')
// 异步
// fs.writeFile('output.txt',data,function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log('ok')
//     }
// })

// 同步
fs.writeFileSync('output.txt',data)