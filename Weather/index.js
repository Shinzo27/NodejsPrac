const express = require('express')
const userRoute = require('./Controller/User')
const mongoose = require('mongoose')
const path = require('path')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const secret = "Shinzo@27"

const app = express()

const PORT = 8000

mongoose.connect("mongodb://127.0.0.1:27017/Weather").then(()=>{console.log("MongoDB Connected")})

app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.set('view engine', 'ejs')
app.set('views', path.resolve('./Views'))

app.use('/api/v1/user', userRoute)

app.get('/',(req,res)=>{
    res.render("login")
})

app.get('/register', (req,res)=>{
    res.render("register")
})

app.get('/home', (req,res)=>{
    const tokenCookie = req.cookies?.token
    if(!tokenCookie) return res.redirect('/')
    const user = jwt.verify(tokenCookie, secret)
    console.log(user)
    res.render('index', {
        user
    })
})

app.listen(PORT, ()=>{
    console.log("server started")
})