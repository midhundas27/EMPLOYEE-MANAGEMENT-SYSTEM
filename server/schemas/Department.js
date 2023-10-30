const mongoose = require('mongoose')

const DepartmentSchema = new mongoose.Schema({
    departmentname: {
        type: String,
        required: true,
    },
    managerid: {
        type: String,
    },
    departmentemail: {
        type: String,
        required: true
    },
    image:{
        type: String,
    },
    location: {
        type: String,
        required: true
    },


    
    
})

module.exports = mongoose.model("Department", DepartmentSchema)