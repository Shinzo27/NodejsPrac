const express = require("express")
const multer = require('multer')
const path = require('path')
const Blog = require("../Model/Blog")

const Router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(`./public/Uploads/`))
    },
    filename: function (req, file, cb) {
      const fileName = `${Date.now()}-${file.originalname}`
      cb(null, fileName)
    }
})
  
const upload = multer({ storage: storage })

Router.get('/add-new',(req,res)=>{
    return res.render("AddBlog", {
        user: req.user
    });
})

Router.post('/', upload.single('coverImage'), async (req,res)=>{
    const { title, body } = req.body
    const blog = await Blog.create({
        body,
        title,
        createdBy: req.user._id,
        coverImageURL: `Uploads/${req.file.filename}`
    })
    return res.redirect('/')
})



module.exports = Router