const mongoose = require('mongoose');
const validator = require('validator')

var messageSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength: [3, "First Name must contain more than 3 letters"]
    },
    lastName:{
        type:String,
        required:true,
        minLength: [3, "Last Name must contain more than 3 letters"]
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate: [validator.isEmail, "Please provide valid email"]
    },
    phone:{
        type:String,
        required:true,
        minLength: [11, "Phone number must contain 11 numbers"],
        maxLength: [11, "Phone number only contain 11 numbers"],
    },
    message:{
        type:String,
        required:true,
        minLength: [11, "Message must contain 10 character"],
    },
});


const Message = mongoose.model('Message', messageSchema);

module.exports = Message