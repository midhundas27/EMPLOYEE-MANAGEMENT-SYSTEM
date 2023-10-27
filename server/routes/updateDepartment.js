const express = require('express')
const router = express.Router()
let Department = require('../schemas/Department')


router.put('/:id', async (req, res) => {
    try {
        const department = await Department.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (!department) {
            return res.status(404).send('Department not found');
        }
        res.send('Department updated successfully');
    }
    catch (err) {
        console.error(err);
        res.status(500).send(`Error updating department: ${err.message}`);
    }

})
module.exports = router;