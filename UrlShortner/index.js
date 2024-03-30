const express = require('express')
const path = require("path")
const cookieParser = require('cookie-parser')
const app = express()
const PORT = 8001
const URL = require('./Models/url')
const { connectToMongoDB } = require("./connect")
const {restrictToLoggedinUserOnly, checkAuth} = require('./Middleware/auth')

const urlRoute = require("./Routes/url")
const staticRoute = require('./Routes/staticRoutes')
const userRoute = require("./Routes/user")


connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(()=>console.log("MongoDB connected"))

app.set("view engine","ejs")
app.set("views", path.resolve("./Views"))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.use("/user", userRoute)
app.use('/',checkAuth, staticRoute)
app.use("/url",restrictToLoggedinUserOnly,  urlRoute)
app.use("/:shortId", urlRoute)

app.listen(PORT, ()=> console.log("Server Started"))
