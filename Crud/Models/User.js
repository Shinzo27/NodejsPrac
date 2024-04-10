const { Schema, model } =  require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "USER",
        enum: ["ADMIN","USER"]
    }
}, {timestamps: true})

const User = model("User", UserSchema);

module.exports = User