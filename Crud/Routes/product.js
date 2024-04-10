const express = require("express")
const multer = require("multer")
const path = require("path")
const Product = require('../Models/Product')

const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        return cb(null, path.resolve('./Public/Uploads'))
    },
    filename: function(req, file, cb){
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
})

const upload = multer({ storage: storage })

router.get('/addProduct', (req,res)=>{
    return res.render("AddProduct");
})

router.post('/addProduct', upload.single('productImgUrl'), async (req,res)=>{
    const { productName, Price } = req.body;
    console.log(req.file)
    const product = await Product.create({
        productName,
        Price,
        productImgUrl: `Uploads/${req.file.filename}`
    })
    return res.redirect('/')
})

module.exports = router