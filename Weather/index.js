const express = require('express')
const userRoute = require('./Controller/User')
const mongoose = require('mongoose')
const path = require('path')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const axios = require('axios')
const { checkForAuthentication } = require('./Middleware/auth')
const secret = 'Shinzo@27'

const app = express()

const PORT = 8000

mongoose.connect("mongodb://127.0.0.1:27017/Weather").then(()=>{console.log("MongoDB Connected")})

app.set('view engine', 'ejs')
app.set('views', path.resolve('./Views'))

app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(checkForAuthentication("token"))

app.use('/api/v1/user', userRoute)

app.get('/',(req,res)=>{
    res.render("login", {
        error: null
    })
})

app.get('/register', (req,res)=>{
    res.render("register", {
        error: null
    })
})

app.get('/home', (req,res)=>{
    const tokenCookie = req.cookies?.token
    if(!tokenCookie) return res.redirect('/')
    const user = jwt.verify(tokenCookie, secret)
    req.user = user
    res.render('index', {
        user,
        weather: null,
        error: null
    })
})

app.post('/weather', async(req,res)=>{
    const { city } = req.body
    const apiKey = "5fa3b1d147956938501425f2e8bc2990"
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    let weather
    var error = null
    try {
        const response = await axios.get(apiUrl)
        weather = response
    } catch (e) {
        weather = null,
        error = "Error, Enter Correct City"
    }
    const user = req.user
    return res.render('index', {
        weather,
        error,
        user
    })
})

app.listen(PORT, ()=>{
    console.log("server started")
})