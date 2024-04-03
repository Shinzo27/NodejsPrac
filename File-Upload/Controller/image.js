const Image = require("../Models/image")

async function handleStoreNewImage(req,res){
    const body = req.body
    if(!body) return res.status(400).json({ error : "Image is Required"});
    await Image.create({
        fileName: req.file.originalname,
        path: req.file.path
    })
    return res.redirect("/")
}

module.exports = {
    handleStoreNewImage
}