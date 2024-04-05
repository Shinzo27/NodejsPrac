const express = require('express')
const path = require('path')
const userRoute = require('./Routes/User')

const app = express()
const PORT = 8000

app.set('view engine', 'ejs')
app.set('views', path.resolve('./Views'))

app.get("/", (req, res)=>{
    res.render("Home");
})

app.use('/user',userRoute)

app.listen(PORT, ()=>console.log("Server Started"))

