const express = require('express')
const User = require('../Model/User')
const jwt = require('jsonwebtoken')

const secret = "Shinzo@27"

const router = express.Router()

router.post('/register', async(req,res)=>{
    const { name, email, password } = req.body
    const register = await User.create({
        name,
        email,
        password
    })
    const token = jwt.sign({
        _id: register._id,
        name: login.name,
        email: register.email,
    }, secret)
    
    return res.cookie("token", token).redirect("/home")
})

router.post('/login', async(req,res)=>{
    const { email, password } = req.body
    // if(!email || !password ) return res.send("Enter All Details")
    const login = await User.findOne({
        email, password
    })

    if(!login) return res.status(404).json({
        success: false,
        message: "User Not Found"
    })

    const token = jwt.sign({
        _id: login._id,
        name: login.name,
        email: login.email,
    }, secret)
    
    return res.cookie("token", token).redirect("/home")
})

module.exports = router