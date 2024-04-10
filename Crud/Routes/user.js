const express = require("express")
const User = require("../Models/User")

const router = express.Router();

router.get("/login",(req, res)=>{
    return res.render("login")
})

router.get("/register",(req, res)=>{
    return res.render("register")
})

router.post('/login', async (req,res)=>{
    const { email, password } = req.body;
    console.log(email, password)
    const user = await User.findOne({
        Email: email,
        Password: password,
    });
    console.log(user)
    if(!user) return res.render('login')

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

module.exports = router;    