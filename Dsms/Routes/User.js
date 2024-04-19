const express = require('express')

const router = express.Router()

router.get("/login",(req,res)=>{
    const { email, password } = req.body;
    return res.render("Login")
})

module.exports = router

