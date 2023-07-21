const hhtp = require('http')
const server = hhtp.createServer((reg,res)=>{

    if(reg.url === '/'){
        res.end("welcome to our home page")
    }
    if(reg.url ==='/about'){
        res.end("here is our history")
    }
    res.end("<h1> oppsss </h1>")



},listen(5000))

