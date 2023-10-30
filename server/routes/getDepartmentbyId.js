

const express = require('express')
const router = express.Router()
let Department = require('../schemas/Department')
let Employees = require('../schemas/Employees')


router.get('/department/:id', async (req, res) => {
    console.log(req.params.id)
    const departmentData = [];
    try {
        console.log(req.params.id)
        const department = await Department.findById(req.params.id)
        if (!department) {
            return res.status(404).send('Department not found');
        }
        const employees = await Employees.find({ departmentid: req.params.id })
        departmentData.push({ ...department._doc    , employees })
        res.json(departmentData);
    }
    catch (err) {
        console.error(err);
        res.status(500).send(`Error updating employee: ${err.message}`);
    }

})
module.exports = router;