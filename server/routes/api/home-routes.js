/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const router = express.Router();
const getToken = require("../../utils/getToken");
const model = require("../../models");
const User = model.user;

// sign up
router.post("/register", async function (req, res) {
  try {
    const { name, email, password } = req.body;

    // create new user
    await new User({ name, email, password }).save();

    const user = await User.findOne({ email: email });

    if (!user) {
      console.log("user not found");
      return res.sendStatus(401);
    }

    // create token with _id as subject
    const token = await getToken(user._id);

    res.send(token);
  } catch (err) {
    console.log(err);

    return res.sendStatus(500);
  }
});

// sign in
router.post("/login", async function (req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email, password: password });

    if (!user) {
      console.log("user not found");
      return res.sendStatus(401);
    }

    const token = await getToken(user._id);

    res.send(token);
  } catch (err) {
    console.log(err);

    return res.sendStatus(500);
  }
});

module.exports = router;
