const mongoose = require('mongoose')

const DepartmentSchema = new mongoose.Schema({
    departmentname: {
        type: String,
        required: true,
    },
    managerid: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },


    
    
})

module.exports = mongoose.model("Department", DepartmentSchema)