const { catchAsyncError } = require('../Middlewares/catchAsyncError')
const { ErrorHandler } = require('../Middlewares/errorMiddleware')
const User = require('../Models/User')
const { generateToken } = require('../Utils/jwtToken')
const cloudinary = require('cloudinary')

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

const getAllDoctors =catchAsyncError( async (req,res,next) => {
    const doctors = await User.find({ role: "Doctor"})
    res.status(200).json({
        success: true,
        doctors
    })
})

const getUserDetails =catchAsyncError( async (req,res,next) => {
    const user = req.user
    res.status(200).json({
        success: true,
        user
    })
})

const logoutAdmin = catchAsyncError(async (req, res, next) => {
    res
      .status(201)
      .cookie("adminToken", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
      })
      .json({
        success: true,
        message: "Admin Logged Out Successfully.",
      });
});

const logoutUser = catchAsyncError(async (req, res, next) => {
    res
      .status(201)
      .cookie("patientToken", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
      })
      .json({
        success: true,
        message: "Patient Logged Out Successfully.",
      });
});

const addNewDoctor = catchAsyncError(async(req,res,next)=>{
    if(!req.files || Object.keys(req.files).length === 0) return next(new ErrorHandler("Doctor Avatar Required", 400))

    const { docAvatar } = req.files;
    const allowedFormats = ["image/png", "image/jpeg", "image/webp"]

    if(!allowedFormats.includes(docAvatar.mimetype)) return next(new ErrorHandler("File Format Not Supported", 400))

    const { firstName, lastName, email, phone, password, gender, dob, nic, doctorDepartment } = req.body;

    if( !firstName || !lastName || !email || !phone || !password || !gender || !dob || !nic || !doctorDepartment ) return next(new ErrorHandler("Pleas Fill full form", 400))

    const isRegistered = await User.findOne({ email });

    if( isRegistered ) return next(new ErrorHandler("User Already Existed With This Email", 400))

    const cloudinaryResponse = await cloudinary.uploader.upload(docAvatar.tempFilePath);
    if(!cloudinaryResponse || cloudinaryResponse.error) return console.error("Cloudinary Error:", cloudinaryResponse.error || "unknown cloudinary error")

    const doctor = await User.create({
        firstName, lastName, email, phone, password, gender, dob, nic, doctorDepartment, role: "Doctor",
        docAvatar: {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url,
        }
    })

    res.status(200).json({
        success: true,
        message: "New Doctor Registered!",
        doctor
    })
})

module.exports = {
    patientRegister,
    login,
    addNewAdmin,
    getAllDoctors,
    getUserDetails,
    logoutAdmin,
    logoutUser,
    addNewDoctor
};