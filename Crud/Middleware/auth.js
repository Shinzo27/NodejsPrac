const { getUser } = require("../Services/auth")

function checkForAuthentication(cookieName){
    return(req,res,next)=>{
        const tokenCookie = req.cookies[cookieName];
        if(!tokenCookie) return next()
        
        try {
            const userPayload = getUser(tokenCookie)
            req.user = userPayload;
        } catch (error) {
            next()
        }
        return next()
    }
}

module.exports = {
    checkForAuthentication
}