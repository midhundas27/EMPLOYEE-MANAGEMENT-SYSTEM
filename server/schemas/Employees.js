const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    dateofjoining: {
        type: Date,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    departmentid: {
        type: String,
        required : true
    },
    yearsofexperience: {
        type: Number,
        required: true,
    },
    ismanager :{
        type: Boolean,
        required: true
    }

    
})

module.exports = mongoose.model("Employee", EmployeeSchema)