const express = require("express")
const http = require("http")
const path = require("path")
const { Server } = require('socket.io')


const app = express()
const server = http.createServer(app)
const io = new Server(server)

//socket.io
io.on('connection',(socket)=>{
    socket.on('message', message=>{
        io.emit("user-message", message);
    })
})

app.use(express.static(path.resolve('./public')))

app.get('/',(req, res)=>{
    return res.sendFile('/public/index.html');
})
server.listen(8000, ()=> console.log("Server Started"))