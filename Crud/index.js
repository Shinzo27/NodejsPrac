const express = require("express");
const { connectToMongoDB } = require("./connect")
const path = require('path')
const userRoute = require('./Routes/user')
const { checkForAuthentication } = require("./Middleware/auth")
const cookieParser = require("cookie-parser")
const productRouter = require("./Routes/product")
const Product = require('./Models/Product')
const cartRouter = require('./Routes/cart')

const PORT = 8000;
const app = express()

connectToMongoDB("mongodb://127.0.0.1:27017/Crud-App")
.then(()=>console.log("MongoDB connected"))

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(checkForAuthentication("token")) 
app.use(express.static(path.resolve('./Public')));

app.set("view engine", "ejs")
app.set("views", path.resolve('./Views'))

app.get('/',async (req,res)=>{
    const allProducts = await Product.find({});
    return res.render("index",{
        user: req.user,
        products: allProducts,
    })
})

app.use('/user', userRoute)
app.use('/product', productRouter)
app.use('/addToCart', cartRouter)

app.listen(PORT, ()=>console.log("Server Started"));