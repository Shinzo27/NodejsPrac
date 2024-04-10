const express = require("express");
const { connectToMongoDB } = require("./connect")
const path = require('path')
const PORT = 8000;
const app = express()

connectToMongoDB("mongodb://127.0.0.1:27017/Crud-App")
.then(()=>console.log("MongoDB connected"))

app.set("view engine", "ejs")
app.set("views", path.resolve('./Views'))

app.get('/',(req,res)=>{
    return res.render("index")
})

app.get('/login',(req,res)=>{
    return res.render("login");
})

app.get('/register',(req,res)=>{
    return res.render("register");
})

app.listen(PORT, ()=>console.log("Server Started"));