const express = require("express")
const path = require('path')

const app = express()
const PORT = 8000


app.set("view engine", "ejs")
app.set("Views", path.resolve('./Views'))

app.use(express.static(path.resolve('./Public')))

app.get("/",(req,res)=>{
    return res.render("Index")
})

app.listen(PORT,()=>console.log("Server Started"))
