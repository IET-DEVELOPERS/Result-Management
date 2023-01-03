const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const verifyToken = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    console.log("hello!!");
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log(token);
      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT);
      console.log(decoded.id);
      req.admin = await Admin.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401).json("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401).json("Not authorized, no token");
  }
};

module.exports = { verifyToken };
