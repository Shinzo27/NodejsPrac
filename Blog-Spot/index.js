const express = require('express')
const path = require('path')
const userRoute = require('./Routes/User')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/BlogSpot').then(()=>console.log("MongoDB Connected"))

const app = express()
const PORT = 8000

app.set('view engine', 'ejs')
app.set('views', path.resolve('./Views'))
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res)=>{
    res.render("Home");
})

app.use('/user',userRoute)

app.listen(PORT, ()=>console.log("Server Started"))

