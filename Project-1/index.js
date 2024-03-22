const express = require("express")
const users = require("./MOCK_DATA.json")
const app = express()
const PORT = 8000

//Routes
app.get("/api/users", (req, res)=>{
    return res.json(users);
})

//html rendering
app.get("/users", (req, res)=>{
    // return res.json(users);
    const html = `
        <ul>
            ${users.map(user=> `<li>${user.first_name}</li>`).join("")}
        </ul>
    `
    res.send(html)
})

//to get user with key
app.get("/api/users/:id", (req,res)=>{
    const id = Number(req.params.id)
    const findUser = users.find((user) => user.id === id )
    return res.json(findUser)
})

//
app.post("/api/users", (req, res)=>{
    res.json({status: "pending"})
})

app.patch("/api/users/:id", (req, res)=>{
    //Todo: edit the user
    res.json({status: "pending"})
})

app.delete("/api/users/:id", (req, res)=>{
    //Todo: delete the user
    res.json({status: "pending"})
})

//shortcut

//app.route('api/users/:id').get((req,res)=>{
//     const id = Number(req.params.id)
//     const findUser = users.find((user) => user.id === id )
//     return res.json(findUser)
// }).put((req,res)=>{}).delete(()=>{})

app.listen(PORT,()=> console.log("Server Started"))