const path = require('path')
const express = require("express")
const multer = require("multer")

const app = express()
const PORT = 8000

const urlRoute = require("./Routes/image");
const { connectToMongoDB } = require("./connect")

connectToMongoDB("mongodb://127.0.0.1:27017/FileUpload")
.then(()=>console.log("MongoDB connected"))

app.set("view engine", "ejs");
app.set("views", path.resolve('./Views'))

app.use(express.urlencoded({ extended: false }))

app.get("/",(req, res)=>{
    return res.render("Homepage")
})

app.use("/upload", urlRoute)

app.listen(PORT, ()=>console.log("Server Started"))