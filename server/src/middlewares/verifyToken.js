const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Middleware to verify the token
const verifyToken = (req, res, next) => {
  const token = req.cookies.token; // Get the token from the cookies
  if (!token) {
    return res.status(401).send("Access Denied: No token provided!");
  }

  try {
    const verified = jwt.verify(token, process.env.SECRETKEY);
    req.user = verified; // Add the verified user's info to the request
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};
module.exports = verifyToken();
// Endpoint to verify the token
