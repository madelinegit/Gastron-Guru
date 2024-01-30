/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const router = express.Router();
const verifyClaims = require("../../utils/verifyClaims");
const model = require("../../models");
const User = model.user;

// get user data
router.get("/", async function (req, res) {
  try {
    // returns user _id from token
    const userId = await verifyClaims(req);

    if (!userId) {
      return res.sendStatus(401);
    }

    const user = await User.findById(userId);

    return res.json(user);
  } catch (err) {
    console.log(err);

    return res.sendStatus(500);
  }
});

module.exports = router;
