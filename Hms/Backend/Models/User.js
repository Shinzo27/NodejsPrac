const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
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
    nic:{
        type:String,
        required:true,
        minLength: [13, "NIC must contain 13 character"],
        maxLength: [13, "NIC must contain 13 character"],
    },
    dob: {
        type: String,
        required: [true, "DOB is required"],
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    password: {
        type: String,
        required: true,
        minLength: [6, "Password must contains 6 characters!"],
        select: false
    },
    role: {
        type: String,
        required: true,
        enum: ["Patient", "Admin", "Doctor"]
    },
    doctorDepartment:{
        type: String,
    },
    docAvatar: {
        public_id: String,
        url: String,
    }
});

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    this.password = await bcrypt.hash(this.password,10);
})

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
};

userSchema.methods.generateJsonWebToken = function(){
    return jwt.sign({
        id: this._id,
    }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES});
}

const User = mongoose.model('User', userSchema);

module.exports = User