/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const router = express.Router();
const getToken = require("../utils/getToken");

// sign up
router.post("/register", async function (req, res) {
  try {
    const { email, password } = req.body;

    /**
     * save user and return JWT
     */

    // get new user's _id to create token

    const token = await getToken("64995e4269e072a77bec5520");

    if (!token) {
      res.status(401);
    }

    res.send(token);
  } catch {
    res.status(500);
  }
});

// sign in
router.post("/login", async function (req, res) {
  try {
    const { email, password } = req.body;

    /**
     * verify user creds and return JWT
     */

    const token = await getToken("64995e4269e072a77bec5520");

    if (!token) {
      res.status(401);
    }

    res.send(token);
  } catch {
    res.status(500);
  }
});

module.exports = router;
