const express = require("express");
const PORT = 8000;

const app = express()

app.get('/',(req,res)=>{
    res.send("Hello DSMS")
})

app.listen(PORT, ()=>console.log("Server Started"));