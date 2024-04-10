const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true,
        unique:true,
    },
    Price:{
        type:String,
        required:true,
        unique:true,
    },
    productImgUrl:{
        type:String,
        required:true,

    },
}, {timestamps: true});

const Product = mongoose.model('Product', productSchema );

module.exports = Product