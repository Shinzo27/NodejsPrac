const { catchAsyncError } = require('../Middlewares/catchAsyncError')
const { ErrorHandler } = require('../Middlewares/errorMiddleware')
const User = require('../Models/User')
const { generateToken } = require('../Utils/jwtToken')

const patientRegister = catchAsyncError(async(req,res,next)=>{
    const { firstName, lastName, email, phone, password, gender, dob, nic, role } = req.body;

    if(!firstName || !lastName || !email || !phone || !password || !gender || !dob || !nic || !role){
        return next(new ErrorHandler("Please Fill full form", 400));
    }
    var user = await User.findOne({
        email
    })

    if(user) return next(new ErrorHandler("User Already Registered", 400))

    user = await User.create({
        firstName, lastName, email, phone, password, gender, dob, nic, role
    })
    generateToken(user, "User Registered Successfully", 200, res)
})

const login = catchAsyncError(async(req,res,next)=>{
    const { email, password, confirmPassword, role } = req.body;

    if(!email || !password || !confirmPassword || !role) return next(new ErrorHandler("Please Provide All details", 400))

    if( password !== confirmPassword ) return next(new ErrorHandler("Password do not matched", 400))

    const user = await User.findOne({email}).select("+password")

    if(!user) return next(new ErrorHandler("Invalid Email or Password", 400))

    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched) return next(new ErrorHandler("Invalid Email or Password", 400))  

    if(role !== user.role) return next(new ErrorHandler("User with this role not found", 400))

    generateToken(user, "User Login Successfully", 200, res)
})

const addNewAdmin = catchAsyncError(async(req,res,next)=>{
    const { firstName, lastName, email, phone, password, gender, dob, nic } = req.body;

    if(!firstName || !lastName || !email || !phone || !password || !gender || !dob || !nic ) return next(new ErrorHandler("Please Fill full form", 400));
    
    var isRegistered = await User.findOne({
        email
    })

    if(isRegistered) return next(new ErrorHandler("User Already Registered", 400))

    const admin = await User.create({
        firstName, lastName, email, phone, password, gender, dob, nic, role: "Admin"
    })

    generateToken(admin, "User Registered Successfully", 200, res)
})

module.exports = {
    patientRegister,
    login,
    addNewAdmin
};