const express = require('express')
const userRoute = require('./Controller/User')
const mongoose = require('mongoose')
const path = require('path')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const axios = require('axios')
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
    let error = null
    try {
        const response = await axios.get(apiUrl)
        weather = response.data
        console.log(weather)
    } catch (error) {
        weather = null,
        error = "Error, Enter Correct City"
    }
    console.log(weather)
    console.log("error" , error)
    const user = req.user
    console.log(user)
    // return res.render('index', {
    //     weather,
    //     error,
    //     user
    // })
})

app.listen(PORT, ()=>{
    console.log("server started")
})