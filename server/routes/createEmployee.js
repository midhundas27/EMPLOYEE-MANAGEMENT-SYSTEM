const express = require('express')
const router = express.Router()
let Employees = require('../schemas/Employees')


router.post('/', async(req, res)=>{
    try{
        const employee = new Employees(req.body)
        await employee.save()
        res.status(201).send(employee)
    }
    catch (err) {
        res.status(500).send(err)
    }

})
module.exports = router;