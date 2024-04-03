const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  // Get the token from the cookies
  const token = req.cookies.token;

  // Check if the token exists
  if (!token) {
    return res.status(403).send({ message: "User not authenticated" });
  }

  // Verify the token
  jwt.verify(token, "your_secret_key", (err, user) => {
    if (err) {
      return res.status(403).send({ message: "User not authenticated" });
    }

    // Save the user in the request object
    req.user = user;

    // Call the next middleware function
    next();
  });
};

module.exports = authenticateToken;
