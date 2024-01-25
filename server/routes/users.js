/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const verifyClaims = require("../utils/verifyClaims");
const router = express.Router();

// get user data
router.get("/", async function (req, res) {
  try {
    const userId = await verifyClaims(req);

    if (!userId) {
      res.status(401);
    }

    res.send(userId);
  } catch {
    res.status(500);
  }
});

module.exports = router;
