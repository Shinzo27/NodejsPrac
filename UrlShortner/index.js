const express = require('express')
const urlRoute = require("./Routes/url")
const app = express()
const PORT = 8001
const URL = require('./Models/url')
const { connectToMongoDB } = require("./connect")

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(()=>console.log("MongoDB connected"))

app.use(express.json())

app.use("/url", urlRoute)

app.get("/:shortId", async (req, res) => {
    const shortID = req.params.shortId
    const entry = await URL.findOneAndUpdate(
    {
        shortId: shortID 
    }, 
    { 
        $push: {
            visitHistory: {
                timeStamp: Date.now()
            }
        }
    })
    // res.send({ result: entry.redirectUrl})
    res.redirect(entry.redirectUrl)
}
)

app.listen(PORT, ()=> console.log("Server Started"))
