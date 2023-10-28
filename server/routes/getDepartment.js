const express = require('express')
const router = express.Router()
let Department = require('../schemas/Department')


router.get('/department', async(req, res)=>{
    try{
        const response = await Department.find()
        res.json(response)
    }
    catch(err){
        res.status(500).send(`Error adding employee: ${err.message}`);
    }

})
module.exports = router;