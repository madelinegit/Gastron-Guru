/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const jwt = require("jsonwebtoken");

async function verifyClaims(req) {
  try {
    // extract JWT from headers and separate token from word 'Bearer'
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return false;
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET || "secret");

    return verified.sub;
  } catch {
    return false;
  }
}

module.exports = verifyClaims;
