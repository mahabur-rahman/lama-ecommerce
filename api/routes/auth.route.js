const express = require("express");
const UserModel = require("../models/user.model");
const router = express.Router();
const CryptoJS = require("crypto-js");

//#######  REGISTER USER #######
router.post("/register-user", async (req, res) => {
  const newUser = new UserModel({
    username: req.body.username,
    email: req.body.email,
    // password: req.body.password,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET),
  });

  // save on db
  try {
    const savedUser = await newUser.save();
    return res.status(201).json(savedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//#######  LOGIN USER #######

// exports
module.exports = router;
