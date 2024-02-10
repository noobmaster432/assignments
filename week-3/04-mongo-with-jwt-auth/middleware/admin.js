// Middleware for handling auth
const jwt = require("jsonwebtoken");
const jwt_secret = "kuchtohaihe";

function adminMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];
  try {
    const decodedValue = jwt.verify(jwtToken, jwt_secret);
    if (decodedValue.username) {
      next();
    } else {
      res.status(403).json({
        msg: "You are not authenticated",
      });
    }
  } catch (error) {
    res.json({
      msg: error,
    });
  }
}

module.exports = adminMiddleware;
