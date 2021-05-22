const express = require('express')
const router = express.Router()
const User = require("../models/User")

router.post('/signup', async (req,res)=>{
    const {firstName,lastName,email,password} = req.body
    const user = new User({ firstName,lastName,email,password})
    await user.save()
    res.send('You made a post request');
})

module.exports = router