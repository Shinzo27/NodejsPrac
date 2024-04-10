const express = require("express")
const User = require("../Models/User");
const { setUser } = require("../Services/auth");

const router = express.Router();

router.get("/login",(req, res)=>{
    return res.render("login")
})

router.get("/register",(req, res)=>{
    return res.render("register")
})

router.post('/login', async (req,res)=>{
    const { email, password } = req.body;
    const user = await User.findOne({
        Email: email,
        Password: password,
    });
    if(!user) return res.render('login')

    const token = setUser(user)
    res.cookie('token', token)
    return res.redirect("/");
})

router.post('/register',async (req,res)=>{
    const { name ,email , password } = req.body;
    await User.create({
        name,
        email,
        password, 
    })
    res.redirect('/');
})

router.get('/logout', (req, res)=>{
    res.clearCookie('token').redirect('/');
})

module.exports = router;