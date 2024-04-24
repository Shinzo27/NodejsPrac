const Message = require("../Models/Message");
const { catchAsyncError } = require('../Middlewares/catchAsyncError')
const { errorMiddleware, ErrorHandler } = require('../Middlewares/errorMiddleware')

const sendMessage = catchAsyncError(async (req,res,next) => {
    const { firstName, lastName, email, phone, message} = req.body;
    if(!firstName || !lastName || !email || !phone || !message){
        return next(new ErrorHandler("Please fill full form", 400))
    }
    await Message.create({
        firstName,
        lastName,
        email,
        phone,
        message
    })
    res.status(200).json({
        success: true,
        message: "Message Send Successfully"
    })
})

const getAllMessages = catchAsyncError(async(req,res,next)=>{
    const messages = await Message.find()
    res.status(200).json({
        success: true,
        messages
    });
});

module.exports = {
    sendMessage,
    getAllMessages
}