const express = require("express")
const { handleGetAllUsers, getUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser } = require("../Controller/user")
const router = express.Router()

//Routes
// router.get("/", async (req, res)=>{
//     const allDbUser = await User.find({})
//     res.setHeader("MyName","Pratham Patel");
//     return res.json(allDbUser);
// })

//html rendering
router.get("/", handleGetAllUsers)

//to get user with key
router.get("/:id", getUserById)

//
router.post("/", handleCreateNewUser)

router.patch("/:id", handleUpdateUserById)

router.delete("/:id", handleDeleteUserById)

//shortcut

//app.route('api/users/:id').get((req,res)=>{
//     const id = Number(req.params.id)
//     const findUser = users.find((user) => user.id === id )
//     return res.json(findUser)
// }).put((req,res)=>{}).delete(()=>{})

module.exports = router