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
    res.render("index")
})

app.listen(PORT, ()=>console.log("Server Started"));