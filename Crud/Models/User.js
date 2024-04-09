const { Schema, model } =  require("mongoose");

const UserSchema = new Schema({
    Name: {
        type: String,
        require: true,
    },
    Email: {
        type: String,
        require: true,
        unique: true
    },
    Password: {
        type: String,
        require: true
    },
    Role: {
        type: String,
        default: "USER",
        enum: ["ADMIN","USER"]
    }
}, {timestamps: true})

const User = model("User", UserSchema);

module.exports = User