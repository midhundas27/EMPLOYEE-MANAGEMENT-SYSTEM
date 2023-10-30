

const express = require('express')
const router = express.Router()
let Department = require('../schemas/Department')
let Employees = require('../schemas/Employees')


router.get('/checkmanager/:id', async (req, res) => {
    console.log(req.params.id)
    const departmentData = [];
    try {
        const department = await Department.findById(req.params.id)
        if (!department) {
            return res.status(404).send('Department not found');
        }
        if (department.managerid === undefined || department.managerid === "") return res.json(false)
        else return res.json(true)
    }
    catch (err) {
        console.error(err);
        res.status(500).send(`Error updating employee: ${err.message}`);
    }

})
module.exports = router;