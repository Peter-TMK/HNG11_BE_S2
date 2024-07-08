const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.status(401).json({
      status: "Bad Request",
      message: "Authentication failed",
      statusCode: 401,
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        status: "Bad Request",
        message: "Authentication failed",
        statusCode: 401,
      });
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
