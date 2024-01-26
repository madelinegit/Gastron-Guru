/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const jwt = require("jsonwebtoken");

async function getToken(userId) {
  // add userId as subject and create JWT
  const [accessToken] = await Promise.all([
    jwt.sign(
      {
        sub: userId,
      },
      process.env.JWT_SECRET || "secret"
    ),
  ]);

  return accessToken;
}

module.exports = getToken;
