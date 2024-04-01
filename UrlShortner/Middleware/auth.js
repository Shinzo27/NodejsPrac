const {getUser} = require('../Service/auth')

function checkForAuthentication(req, res, next){
    const authorizationHeaderValue = req.headers["authorization"]
    req.user = null
    if(!authorizationHeaderValue || !authorizationHeaderValue.startsWith('Bearer'))
        return next()

    const token = authorizationHeaderValue.split('Bearer')[1]
    const user = getUser(token)

    req.user = user;
    return next()
}

function restricTo(roles){
    return function(req, res, next){
        if(!req.user) return res.redirect('/login');

        if(!roles.includes(req.user.role)) return res.end("Unauthorized")

        next()
    }
}

module.exports = {
     checkForAuthentication,
     restricTo
}