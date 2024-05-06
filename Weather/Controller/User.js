const express = require('express')
const User = require('../Model/User')
const jwt = require('jsonwebtoken')

const secret = "Shinzo@27"

const router = express.Router()

router.post('/register', async(req,res)=>{
    const { name, email, password } = req.body

    if(!name || !email || !password ) return res.render("register", { error: "Enter All Details" })

    //cheeck mail already exist
    const ifExist = await User.findOne({
        email
    })

    if(ifExist) return res.render("register", {
        error: "User Already Exist With This Email!"
    })
    const register = await User.create({
        name,
        email,
        password
    })
    const token = jwt.sign({
        _id: register._id,
        name: register.name,
        email: register.email,
    }, secret)
    
    return res.cookie("token", token).redirect("/home")
})

router.post('/login', async(req,res)=>{
    const { email, password } = req.body

    if(!email || !password ) return res.render("login", {
        error: "Enter All Details!"
    })

    const login = await User.findOne({
        email, password
    })

    if(!login) return res.render('login', {
        error: "Invalid Credentials"
    })

    const token = jwt.sign({
        _id: login._id,
        name: login.name,
        email: login.email,
    }, secret)
    
    return res.cookie("token", token).redirect("/home")
})

router.get('/logout', (req,res)=>{
    res.clearCookie("token").redirect('/')
})

module.exports = router