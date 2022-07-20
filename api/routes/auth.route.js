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
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
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
router.post("/login-user", async (req, res) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username });
    // console.log(user);

    if (!user) {
      return res.status(401).json("user not found !");
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRET
    );

    // console.log(hashedPassword);

    // original pass
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8); // pass : 123456

    // console.log("original pass : ", originalPassword);
    if (originalPassword !== req.body.password) {
      return res.status(401).json("Incorrect Password");
    }

    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// exports
module.exports = router;
