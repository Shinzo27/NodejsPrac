const http = require("http")
const express = require("express")

const app = express()

app.get('/', (req,res)=>{
    res.send("Hello From home page")
})

app.get('/about', (req,res)=>{
    res.send(`Hello ${req.query.name} From about page `)
})

app.listen(8000, ()=>{
    console.log("Server Started");
})