const { Schema, model, Types } =  require("mongoose");

const CartSchema = new Schema({
    userID: {
        type: Types.ObjectId,
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
    }
}, {timestamps: true})

const User = model("User", UserSchema);

module.exports = User