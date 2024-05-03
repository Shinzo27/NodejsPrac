const jwt = require('jsonwebtoken')

const secret = 'Shinzo@27'

function validateToken(token){
    const payload = jwt.verify(token, secret)
    return payload
}

module.exports = validateToken