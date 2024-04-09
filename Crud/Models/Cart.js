const { Schema, model } =  require("mongoose");

const CartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    productId: {
        type: String,
        require: true,
        unique: true
    },
    Quantity: {
        type: String,
        require: true
    }
}, {timestamps: true})

const Cart = model("Cart", CartSchema);

module.exports = Cart