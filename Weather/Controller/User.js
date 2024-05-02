const express = require('express')
const User = require('../Model/User')

const router = express.Router()

router.post('/register', async(req,res)=>{
    const { name, email, password } = req.body
    const register = await User.create({
        name,
        email,
        password
    })
    const token = jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role
    }, secret)
    return res.render("index")
})

router.post('/login', async(req,res)=>{
    const { email, password } = req.body
    if(!email || !password ) return res.status(404).json({
        success: false,
        message: "Enter All Details"
    })
    const login = await User.findOne({
        email, password
    })
    if(!login) return res.status(404).json({
        success: false,
        message: "User Not Found"
    })
    return res.render("index")
})

module.exports = router