const jwt = require("jsonwebtoken");

const generateToken = (payload, expiresIn = "7d") => {
  return jwt.sign(payload, process.env.JWT_SECRET || "default_jwt_secret", { expiresIn });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET || "default_jwt_secret");
};

module.exports = {
  generateToken,
  verifyToken,
};
