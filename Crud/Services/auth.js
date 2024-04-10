const jwt = require('jsonwebtoken')
const secret = "Shinzo@123"

function setUser(user){
    console.log(user)
    
    const payload = {
        _id: user._id,
        email: user.Email,
        name: user.Name,
        role: user.Role
    }
    console.log(payload)
    const token = jwt.sign(payload, secret)
    return token
}

function getUser(token){
    if(!token) return null
    return jwt.verify(token, secret)
}

module.exports = {
    setUser,
    getUser,
}