const { Schema, model } =  require("mongoose");

const CartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    productName: {
        type: String,
        require: true,
        unique: true
    },
    productPrice: {
        type: String,
        require: true,
    },
    Quantity: {
        type: String,
        require: true
    },
}, {timestamps: true})

const Cart = model("Cart", CartSchema);

module.exports = Cart