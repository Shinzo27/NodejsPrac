const express = require("express")
const Cart = require("../Models/Cart");
const Product = require("../Models/Product")

const router = express.Router();

router.get('/cart', async (req,res)=>{
    if(!req.user) return res.redirect('/')
    const cartItems = await Cart.find({userId: req.user._id})
    if(cartItems.length === 0 ) return res.render("Cart",{items: null, user: req.user})

    return res.render("Cart", {
        items: cartItems,
        user: req.user,
    })  
})

router.get('/:id',async (req, res)=>{
    if(!req.user) return res.render("login");
    const product = await Product.findById(req.params.id);
    const findIfExists = await Cart.findOne({
        productName: product.productName,
        userId: req.user._id
    })
    if(findIfExists) return res.json({ Error: 'Already Added'})
    const cart = await Cart.create({
        userId: req.user._id,
        productName: product.productName,
        productPrice: product.Price,
        Quantity: '2',
    })
    return res.redirect('/')
})

router.get('/removeItem/:id',async (req, res)=>{
    // console.log(req.params.id)
    const remove = await Cart.deleteOne({ productName: req.params.id})
    return res.redirect('/addToCart/cart')
})

module.exports = router