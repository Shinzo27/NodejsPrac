require('dotenv').config();

const express = require('express')
const path = require('path')
const userRoute = require('./Routes/User')
const blogRoute = require('./Routes/Blog')
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser")
const { checkForAuthentication } = require('./Middleware/Auth')
const Blog = require('./Model/Blog')

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("MongoDB Connected"))

const app = express()
const PORT = process.env.PORT || 8000

app.set('view engine', 'ejs')
app.set('views', path.resolve('./Views'))

app.use(express.urlencoded({extended: false}))
app.use(cookieParser());
app.use(checkForAuthentication("token"))
app.use(express.static(path.resolve('./Public')))

app.get("/", async (req, res)=>{
    const allBlog = await Blog.find({});
    res.render("Home", {
        user: req.user,
        blogs: allBlog
    });
})

app.use('/user',userRoute)
app.use('/blog',blogRoute)

app.listen(PORT, ()=>console.log("Server Started"))

