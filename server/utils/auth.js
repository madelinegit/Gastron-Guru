const jwt = require("jsonwebtoken");

const secret = "complexsecret";
const expiration = "2h";

module.exports ={
    authMiddleware(req, res, next) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
        token = token.split(" ").pop().trim();
    }

    if (!token) {
        return next();
    }

    try {
        const { authenticatedPerson } = jwt.verify(token, secret, {
            maxAge: expiration,
        });
        req.user = authenticatedPerson;
    } catch {
        console.log("Invalid token");
    }

    next();
    },
    signToken({ authID, _id }) {
        const payload = { authID, _id };
        return jwt.sign({ authenticatedPerson: payload }, secret, {
            expiresIn: expiration,
        });
    }
} 