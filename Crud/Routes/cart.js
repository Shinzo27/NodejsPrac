const express = require("express")
const Cart = require("../Models/Cart");
const Product = require("../Models/Product")

const router = express.Router();

router.get('/:id',async (req, res)=>{
    const product = await Product.findById(req.params.id);
    console.log(product)
    const findIfExists = 
    const cart = await Cart.create({
        userId: req.user._id,
        productId: product._id,
        Quantity: '1',
    })
    return res.redirect('/')
})

module.exports = router