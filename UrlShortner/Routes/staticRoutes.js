
const express = require("express")
const URL = require("../Models/url")
const { restricTo } = require("../Middleware/auth")

const router = express.Router()

router.get("/admin/urls", restricTo(["ADMIN"], async (req,res)=> {
    const allUrls = await URL.find({})
    return res.render("home", {
        urls: allUrls
    })
}))

router.get("/",restricTo(["NORMAL", "ADMIN"]), async (req,res)=> {
    const allUrls = await URL.find({ createdBy: req.user._id})
    return res.render("home", {
        urls: allUrls
    })
})

router.get('/signup',(req,res)=>{
    return res.render("signup")
})

router.get('/login',(req,res)=>{
    return res.render("login")
})

module.exports = router