const mongoose = require('mongoose');
const validator = require('validator')

const appointmentSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength: [3, "First Name must contain more than 3 letters"]
    },
    lastName:{
        type:String,
        required:true,
        minLength: [3, "Last Name must contain more than 3 letters"]
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate: [validator.isEmail, "Please provide valid email"]
    },
    phone:{
        type:String,
        required:true,
        minLength: [11, "Phone number must contain 11 numbers"],
        maxLength: [11, "Phone number only contain 11 numbers"],
    },
    nic:{
        type:String,
        required:true,
        minLength: [13, "NIC must contain 13 character"],
        maxLength: [13, "NIC must contain 13 character"],
    },
    dob: {
        type: String,
        required: [true, "DOB is required"],
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    appointment_date:{
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    doctor: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    hasVisited: {
        type: Boolean,
        default: false
    },
    doctorId: {
        type: mongoose.Schema.ObjectId,
        required: true,
    },
    patientId: {
        type: mongoose.Schema.ObjectId,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending","Accepted","Rejected"],
        default: "Pending"
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment