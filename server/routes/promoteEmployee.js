const express = require('express')
const router = express.Router()
let Employees = require('../schemas/Employees')


router.put('/promote/:id', async (req, res) => {
    const Employee = await Employees.findById(req.params.id)
    if (!CheckEligibility(Employee)) 
        res.status(500).send("Not Eligible")
    try {
        const employee = await Employees.updateOne({ _id: ObjectId(req.params.id) },
    {
        $set: { isManager: true }
    }
        )
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        res.send('Employee updated successfully');
    }
    catch (err) {
        console.error(err);
        res.status(500).send(`Error updating employee: ${err.message}`);
    }

})

const CheckEligibility = (Edata) => {
    const diff = new Date() - new Date(Edata.dateofjoining);
    const yrs = diff/(1000*60*60*24*365)
    if (yrs >= 5) return true;
}
module.exports = router;