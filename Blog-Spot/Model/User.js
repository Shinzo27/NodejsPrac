const { Schema, model }  = require("mongoose");
const { error } = require("node:console");
const { createHmac, randomBytes } = require('node:crypto');
const { createTokenForUser } = require("../Services/Authentication");

const UserSchema = new Schema({
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

UserSchema.pre('save',function(next){
    const user = this;

    if(!user.isModified("password")) return ;

    const salt = randomBytes(16).toString();
    const hashedPass = createHmac('sha256', salt).update(user.password).digest('hex');

    this.salt = salt;
    this.password = hashedPass

    next()
})

UserSchema.static('matchPasswordAndGenerateToken', async function(email,password){
    const user = await this.findOne({email})
    if(!user) throw new Error('User Not Found');
    const salt = user.salt;
    const hashedPassword = user.password;
    
    const userProvidedPassword = createHmac('sha256', salt).update(password).digest('hex');
    
    if(hashedPassword !== userProvidedPassword ) throw new Error('Incorrect Password')
    // return { ...User, password: undefined, salt: undefined};
    const token = createTokenForUser(user)
    return token
})

const User = model("User", UserSchema)

module.exports = User