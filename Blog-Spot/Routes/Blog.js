const express = require("express")
const multer = require('multer')
const path = require('path')
const Blog = require("../Model/Blog")
const Comment = require("../Model/Comment")

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

Router.get('/:id',async (req,res)=>{
    const blog = await Blog.findById(req.params.id).populate("createdBy");
    const comments = await Comment.find({ blogId: req.params.id}).populate("createdBy");

    return res.render('Blog',{
        user: req.user,
        blog,
        comments,
    })
})

Router.post("/comment/:blogId", async (req,res)=>{
    const comment = await Comment.create({
        content: req.body.content,
        blogId: req.params.blogId,
        createdBy: req.user._id,
    });
    return res.redirect(`/Blog/${req.params.blogId}`)
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