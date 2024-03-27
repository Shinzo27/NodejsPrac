const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} : New Request received\n`
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data)=>{
        switch(myUrl.pathname) {
            case '/' : res.end("Home page");
            break;
            case '/about' : 
                const username = myUrl.query.mynum;

                res.end(`Hello, This is ${username}`);
            break;
            default: res.end("404: Not found")
        }
        console.log("new request received!");
    });
})

myServer.listen(8000,()=>{
    console.log("Server Started");
})
