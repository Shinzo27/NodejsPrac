const User = require('../Models/user')

async function handleGetAllUsers(req, res) {
    const allDbUser = await User.find({})
    return res.json(allDbUser)
}

async function getUserById(req,res) {
    const user = await User.findById(req.params.id);
    return res.json(user)
}

async function handleUpdateUserById(req, res){
     //Todo: edit the user
     await User.findByIdAndUpdate(req.params.id, { lastName: 'Changed' })
     return res.json({ result: "success"})
}

async function handleDeleteUserById(req, res) {
     //Todo: delete the user
     await User.findByIdAndDelete(req.params.id)
     return res.json({Status : "Success"})
}

async function handleCreateNewUser(req, res) {
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
}

module.exports = ({
    handleGetAllUsers,
    getUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
})