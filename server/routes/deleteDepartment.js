const express = require('express')
const router = express.Router()
let Department = require('../schemas/Department')
let Employees = require('../schemas/Employees')


//Delete employee by ID

router.delete('/department/:id', async (req, res) => {
    const employees = await Employees.find({ departmentId: req.params.id })
    if (employees.length > 0) {
        res.status(500).send("Cannot remove a Department with Employees")
    }

    try {
        const department = await Department.findByIdAndDelete(req.params.id);
        if (!department) {
            return res.status(404).send('Department not found');
        }
        res.send('Department deleted');
    } catch (err) {
        console.error(err);
    }
})

module.exports = router;