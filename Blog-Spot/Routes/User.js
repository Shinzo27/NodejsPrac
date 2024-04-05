const express = require('express')
const User = require('../Model/User')

const router = express.Router();

router.get('/signin', (req,res)=>{
    return res.render("Signin");
});

router.get('/signup', (req,res)=>{
    return res.render("Signup");
});

router.post('/signup', async (req,res)=>{
    const { fullName, email, password } = req.body;
    await User.find.create({
        fullName,
        email,
        password
    })
    return res.redirect("/");
})

module.exports = router