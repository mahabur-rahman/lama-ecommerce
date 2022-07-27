const express = require("express");
const CryptJS = require("crypto-js");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
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

// ######### DELETE USER #########

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);

    return res.status(200).json("User has been deleted...");
  } catch (err) {
    return res.status(500).json(err);
  }
});

// ######### GET SINGLE USER #########

router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);

    const { password, ...others } = user._doc;

    return res.status(200).json(others);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// ######### GET ALL USER #########
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;

  //   console.log(query);
  try {
    const users = query
      ? await UserModel.find().sort({ _id: -1 }).limit(5)
      : await UserModel.find();

    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// router.get("/", async (req, res) => {
//   const query = req.query.new;

//   //   console.log(query);
//   try {
//     const users = query
//       ? await UserModel.find().sort({ _id: -1 }).limit(5)
//       : await UserModel.find();

//     return res.status(200).json(users);
//   } catch (err) {
//     return res.status(500).json(err);
//   }
// });

// ######### GET USER STATS #########
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();

  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  //   console.log(lastYear);

  try {
    const data = await UserModel.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },

      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// export
module.exports = router;
