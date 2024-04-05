const mongoose = require("mongoose")
const { createHmac, randomBytes } = require('node:crypto');

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    salt: {
        type: String,
        required : true
    },
    password: {
        type: String,
        required: true
    },
    profileImageUrl: {
        type: String,
        default: '/Images/default.png'
    },
    role: {
        type: String,
        enum: ["USER","ADMIN"],
        default: "USER"
    }
}, { timestamps: true })

const User = mongoose.model("User", UserSchema)

UserSchema.pre('save',function(next){
    const user = this;

    if(!user.isModified("password")) return ;

    const salt = randomBytes(16).toString();
    const hashedPass = createHmac('sha256', salt).update(user.password).digest('hex');

    this.salt = salt;
    this.password = hashedPass

    next()
})

module.exports = User