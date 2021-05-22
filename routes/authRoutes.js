const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken")
const User = require("../models/User");
const Key = require("../utils/Secret_Key")

router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const user = new User({ firstName, lastName, email, password });
    await user.save();
    const token = jwt.sign({userId:user._id},Key)
    res.send({token});
  } catch (err) {
    res.status(422).send(err.message)
  }
});

module.exports = router;
