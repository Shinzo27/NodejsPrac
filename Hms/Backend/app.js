const express = require('express')
const { config } = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const mongoose = require('mongoose')
const cloudinary = require('cloudinary')

const app = express()
const PORT = 8000

config({path: './Config/.env'})

mongoose.connect(process.env.MONGO_URI).then(console.log("DB Connected"))

app.use(
    cors({
        origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
        methods: ['get','post','put','delete'],
        credentials: true
    })
);

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
)

app.listen(process.env.PORT, ()=>{
    console.log("Server Started")
})