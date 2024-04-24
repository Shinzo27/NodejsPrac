const { catchAsyncError } = require('../Middlewares/catchAsyncError')
const { ErrorHandler } = require('./errorMiddleware')
const jwt = require('jsonwebtoken')
const User = require('../Models/User')

const isAdminAuthenticated = catchAsyncError(async(req,res,next)=>{
    const token = req.cookies.adminToken
    if(!token) return next(new ErrorHandler("Admin Not Authenticated",400))
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    const id = decoded.id
    req.user = await User.findOne({ _id: id});
    if(req.user.role !== "Admin") return next(new ErrorHandler(`${req.user.role} not authorized for this resources!`, 403));

    next();
})

const isPatientAuthenticated = catchAsyncError(async(req,res,next)=>{
    const token = req.cookies.patientToken

    if(!token) return next(new ErrorHandler("Patient Not Authenticated",400))

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.user = await User.findById(decoded.id);

    if(req.user.role !== "Patient") return next(new ErrorHandler(`${req.user.role} not authorized for this resources!`, 403));

    next();
})

module.exports = {
    isAdminAuthenticated,
    isPatientAuthenticated
}