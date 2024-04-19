const express = require("express")
const path = require('path')
const userRoute = require('./Routes/User')

const app = express()
const PORT = 8000


app.set("view engine", "ejs")
app.set("Views", path.resolve('./Views'))
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname,"Public")));

app.use('/user', userRoute)

app.get("/login",(req,res)=>{
    return res.render("Login")
})

app.get("/",(req,res)=>{
    return res.render("Index")
})

app.listen(PORT,()=>console.log("Server Started"))
