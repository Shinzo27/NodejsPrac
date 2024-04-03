const express = require("express")
const router = express.Router()
const multer = require("multer")
const { handleStoreNewImage } = require('../Controller/image')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        return cb(null, './uploads')
    },
    filename: function(req, file, cb){
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
})

const upload = multer({ storage })

router.post("/", upload.single("imageUpload"), handleStoreNewImage)

module.exports = router