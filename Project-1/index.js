const express = require("express")
const users = require("./MOCK_DATA.json")
const app = express()
const PORT = 8000
const fs = require("fs")

//plugin
app.use(express.urlencoded({extended: false}))

//Routes
app.get("/api/users", (req, res)=>{
    res.setHeader("MyName","Pratham Patel");
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
    const body = req.body
    // console.log(body)
    users.push({id: users.length + 1 , ...body})
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err, data)=>{
        return res.json({status: "success", id: users.length + 1})
    })
})

app.patch("/api/users/:id", (req, res)=>{
    //Todo: edit the user
    res.json({status: "pending"})
})

app.delete("/api/users/:id", (req, res)=>{
    //Todo: delete the user
    const id = Number(req.params.id)
    const filterUser = users.filter((user)=>{
        return user.id != id
    })
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(filterUser), (err, data)=>{
        return res.json({status: "Success"})
    })
})

//shortcut

//app.route('api/users/:id').get((req,res)=>{
//     const id = Number(req.params.id)
//     const findUser = users.find((user) => user.id === id )
//     return res.json(findUser)
// }).put((req,res)=>{}).delete(()=>{})

app.listen(PORT,()=> console.log("Server Started"))