const express = require('express')
const path = require("path")
const Notes = require("./Model/Note")
const mongoose = require("mongoose")
const User = require("./Model/User")

const app = express()
const PORT = 8000

mongoose.connect("mongodb://127.0.0.1:27017/NoteJs").then(console.log("MongoDB Connected!"))

app.set("view engine","ejs")
app.set("Views", path.resolve('./Views'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'Public')))
app.use(express.json());

app.get('/index', async(req,res)=>{
    const notes = await Notes.find({})
    return res.render("index", {
        notes
    })
})

app.get('/', (req,res)=>{
    return res.render("login")
})

app.get('/register', (req,res)=>{
    return res.render("register")
})

app.post('/register', async(req,res)=>{
    const { email, password } = req.body;
    const newUser = await User.create({
        email,
        password
    })
    if(!newUser) return res.redirect('login')
    return res.redirect('index')
})

app.post('/login', async(req,res)=>{
    const { email, password } = req.body;
    const currentUser = await User.findOne({
        email: email,
        password: password
    })
    if(!currentUser) return res.render('register')
    return res.redirect('/index')
})

app.post('/create', async(req,res)=>{
    const { title, data } = req.body
    const createNote = await Notes.create({
        title,
        data
    })
    if(createNote) return res.redirect('/')
})

app.get('/note/:id', async (req, res)=>{
    const id = req.params.id;
    const note = await Notes.findById({ _id: id})
    if(!note) return res.redirect('/');
    return res.render("note", {
        note
    });
})

app.get('/delete/:id', async (req, res)=>{
    const id = req.params.id;
    const note = await Notes.deleteOne({ _id: id})
    if(!note) return res.redirect('/');
    return res.redirect("/");
})

app.listen(PORT, ()=>console.log("Server Started"))