const jwt = require("jsonwebtoken");
const User = require("../modals/UserModal.js");

const protect = async (req, res, next) => {
  let token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      return res.status(401).json({ message: "Unauthorized, Invalid token" });
    }
  } else {
    return res.status(401).json({ message: "Unauthorized, No token" });
  }
};

module.exports = { protect };
