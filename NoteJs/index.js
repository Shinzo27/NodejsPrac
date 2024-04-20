const express = require('express')
const path = require("path")
const Notes = require("./Model/Note")
const mongoose = require("mongoose")

const app = express()
const PORT = 8000

mongoose.connect("mongodb://127.0.0.1:27017/NoteJs").then(console.log("MongoDB Connected!"))

app.set("view engine","ejs")
app.set("Views", path.resolve('./Views'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'Public')))
app.use(express.json());


app.get('/', async(req,res)=>{
    const notes = await Notes.find({})
    return res.render("index", {
        notes
    })
})

app.post('/create', async(req,res)=>{
    const { title, data } = req.body
    const createNote = await Notes.create({
        title,
        data
    })
    if(createNote) return res.redirect('/')
})

app.listen(PORT, ()=>console.log("Server Started"))