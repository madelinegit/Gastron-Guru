/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.json({ title: "Express" });
});

// sign up
router.post("/register", function (req, res, next) {
  try {
    const { email, password } = req.body;

    res.status(201);
  } catch (err) {
    console.log(err);

    res.status(500);
  }
});

// sign in
router.post("/login", function (req, res, next) {
  try {
    const { email, password } = req.body;

    res.send("token");
  } catch (err) {
    console.log(err);

    res.status(500);
  }
});

module.exports = router;
