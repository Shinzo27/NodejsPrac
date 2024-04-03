const express = require("express")
const router = express.Router()
const Image = require("../Models/image")

router.get("/", async (req,res)=> {
    const allUrls = await Image.find({})
    return res.render("Homepage", {
        urls: allUrls
    })
})

module.exports = router