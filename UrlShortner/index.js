const express = require('express')
const path = require("path")
const urlRoute = require("./Routes/url")
const app = express()
const PORT = 8001
const URL = require('./Models/url')
const { connectToMongoDB } = require("./connect")
const staticRoute = require('./Routes/staticRoutes')

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(()=>console.log("MongoDB connected"))

app.set("view engine","ejs")
app.set("views", path.resolve("./Views"))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', staticRoute)

app.use("/url", urlRoute)

app.use("/:shortId", urlRoute)

app.listen(PORT, ()=> console.log("Server Started"))
