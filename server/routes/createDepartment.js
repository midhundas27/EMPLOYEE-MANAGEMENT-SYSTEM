const express = require('express')
const router = express.Router()
let Department = require('../schemas/Department')


router.post('/department', async(req, res)=>{
    try{
        const department = new Department(req.body)
        await department.save()
        res.status(201).send(department)
    }
    catch {
        res.status(500).send('something went wrong')
    }

})
module.exports = router;