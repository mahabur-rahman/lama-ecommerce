const express = require("express");
const CryptJS = require("crypto-js");
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");
const UserModel = require("../models/user.model");
const router = express.Router();

// ######### UPDATE USER #########

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString();
  }

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// export
module.exports = router;
