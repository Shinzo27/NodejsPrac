const express = require('express')
const path = require("path")

const app = express()
const PORT = 8000

app.set("view engine","ejs")
app.set("Views", path.resolve('./Views'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'Public')))
app.use(express.json());


app.get('/',(req,res)=>{
    return res.render("index")
})

app.listen(PORT, ()=>console.log("Server Started"))