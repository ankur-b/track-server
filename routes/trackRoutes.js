const express = require('express')

const Track = require('../models/Track')
const requireAuth = require('../middlewares/requireAuth')
const router = express.Router()
router.use(requireAuth)
router.get('/tracks',async(req,res)=>{
    const tracks = await Track.find({userId:req.user._id})
    res.send(tracks)
})

