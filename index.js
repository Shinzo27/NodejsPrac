const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} : New Request received\n`
    fs.appendFile("log.txt", log, (err, data)=>{
        switch(req.url) {
            case '/' : res.end("Home page");
            break;
            case '/about' : res.end("Hello, This is Pratham Patel");
            break;
            default: res.end("404: Not found")
        }
        console.log("new request received!");
        res.end("Hello from server");
    });
})

myServer.listen(8000,()=>{
    console.log("Server Started");
})
