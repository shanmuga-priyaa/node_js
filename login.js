const http=require("http")
const fs=require("fs")
http.createServer((req,res)=>{
    fs.readFile("login.html",(err,data)=>{
    res.write(data.toString());
    res.end();
    })
}).listen(8080)