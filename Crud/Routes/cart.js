const express = require("express")
const Cart = require("../Models/Cart");
const Product = require("../Models/Product")

const router = express.Router();

router.get('/cart', async (req,res)=>{
    const cartItems = await Cart.find({userId: req.user._id})
    return res.render("Cart", {
        items: cartItems,
        user: req.user,
    })
})

router.get('/:id',async (req, res)=>{
    if(!req.user) return res.render("login");
    const product = await Product.findById(req.params.id);
    const findIfExists = await Cart.findOne({
        productId: req.params.id,
        userId: req.user._id
    })
    if(findIfExists) return res.json({ Error: 'Already Added'})

    const cart = await Cart.create({
        userId: req.user._id,
        productId: product._id,
        Quantity: '1',
    })
    return res.redirect('/')
})

router.get('/removeItem/:id',async (req, res)=>{
    const remove = await Cart.deleteMany({ productId: req.params.id})
    return res.render('Cart')
})

module.exports = router