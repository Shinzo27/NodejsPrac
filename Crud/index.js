const express = require("express");
const { connectToMongoDB } = require("./connect")

const PORT = 8000;
const app = express()

connectToMongoDB("mongodb://127.0.0.1:27017/Crud-App")
.then(()=>console.log("MongoDB connected"))

app.get('/',(req,res)=>{
    res.send("Hello DSMS")
})

app.listen(PORT, ()=>console.log("Server Started"));