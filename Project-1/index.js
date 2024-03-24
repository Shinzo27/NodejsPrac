const express = require("express")
const app = express()
const PORT = 8000
const fs = require("fs")
const mongoose = require("mongoose")

//Mongoose connection
mongoose
    .connect('mongodb://127.0.0.1:27017/firstTest')
    .then(()=> console.log('MongoDB Connected'))
    .catch(err => console.log("Mongo Error", err));


//Mongoose Schema
const userScheme = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String
    },
    gender: {
        type: String
    }
}, {timestamps: true})

//mongoose model
const User = mongoose.model('user',userScheme);

//plugin
app.use(express.urlencoded({extended: false}))

//Routes
app.get("/api/users", async (req, res)=>{
    const allDbUser = await User.find({})
    res.setHeader("MyName","Pratham Patel");
    return res.json(allDbUser);
})

//html rendering
app.get("/users", async (req, res)=>{
    const allDbUser = await User.find({})
    // return res.json(users);
    const html = `
        <ul>
            ${allDbUser.map(user=> `<li>${user.firstName}</li>`).join("")}
        </ul>
    `
    res.send(html)
})

//to get user with key
app.get("/api/users/:id", async (req,res)=>{
    const user = await User.findById(req.params.id);
    return res.json(user)
})

//
app.post("/api/users", async (req, res)=>{
    const body = req.body
    // console.log(body)
    // users.push({id: users.length + 1 , ...body})
    // fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err, data)=>{
    //     return res.json({status: "success", id: users.length + 1})
    // })
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        jobTitle: body.job_title,
        gender: body.gender
    })
    console.log(result)
    return res.status(201).json({msg: 'Success'})
})

app.patch("/api/users/:id", async (req, res)=>{
    //Todo: edit the user
    await User.findByIdAndUpdate(req.params.id, { lastName: 'Changed' })
    return res.json({ result: "success"})
})

app.delete("/api/users/:id", async (req, res)=>{
    //Todo: delete the user
    await User.findByIdAndDelete(req.params.id)
    return res.json({Status : "Success"})
})

//shortcut

//app.route('api/users/:id').get((req,res)=>{
//     const id = Number(req.params.id)
//     const findUser = users.find((user) => user.id === id )
//     return res.json(findUser)
// }).put((req,res)=>{}).delete(()=>{})

app.listen(PORT,()=> console.log("Server Started"))