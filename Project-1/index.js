const express = require("express")
const app = express()
const PORT = 8000
const fs = require("fs")
const {connectMongoDb} = require("./connection")

const userRouter = require("./Routes/user")

//Mongoose connection
connectMongoDb("mongodb://127.0.0.1:27017/firstTest").then(()=>console.log("MongoDB Connected"))

//plugin
app.use(express.urlencoded({extended: false}))

app.use('/api/user', userRouter)

app.listen(PORT,()=> console.log("Server Started"))