const mongoose = require('mongoose')

const imageSchema = mongoose.Schema({
    filename: {
        type: String,
        require: true,
        unique: true
    },
    path: {
        type: String,
        require: true,
        unique: true
    }
}, { timestamps: true});

const Image = mongoose.model("Image",imageSchema)

module.exports = Image