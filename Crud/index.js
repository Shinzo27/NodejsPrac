const express = require("express");
const { connectToMongoDB } = require("./connect")
const path = require('path')
const userRoute = require('./Routes/user')
const { checkForAuthentication } = require("./Middleware/auth")
const cookieParser = require("cookie-parser")

const PORT = 8000;
const app = express()

connectToMongoDB("mongodb://127.0.0.1:27017/Crud-App")
.then(()=>console.log("MongoDB connected"))

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(checkForAuthentication("token")) 

app.set("view engine", "ejs")
app.set("views", path.resolve('./Views'))

app.get('/',(req,res)=>{
    return res.render("index",{
        user: req.user
    })
})

app.use('/user', userRoute)

app.listen(PORT, ()=>console.log("Server Started"));