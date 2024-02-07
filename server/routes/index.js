/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const router = express.Router();
const { signToken } = require("../utils/auth");
const model = require("../models");
const User = model.user;

router.post('/checkUser', async (req, res) => {
  const { authID, name, email } = req.body;

  try {
    const userResult = await User.find({ authID, name, email });

    if (userResult.length > 0) {
      const token = signToken({ authID, _id: userResult[0]._id });
      return res.json({ token, user: userResult[0] });
    } else {
      const user = await User.create({ authID, name, email });
      const token = signToken({ authID, _id: user._id });
      return res.json({ token, user });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
