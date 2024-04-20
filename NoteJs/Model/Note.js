const mongoose = require('mongoose'); // Erase if already required

var noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        index:true,
    },
    data:{
        type:String,
        required:true,
    },
}, { timestamps: true });

const Notes = mongoose.model('Note', noteSchema);

module.exports = Notes