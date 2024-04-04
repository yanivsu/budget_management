const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token; // Assuming the token is sent in a cookie
  if (token == null) return res.sendStatus(401); // if there's no token, return 401 Unauthorized

  jwt.verify(token, process.env.SECRETKEY, (err, user) => {
    if (err) return res.sendStatus(403); // if the token is not valid, return 403 Forbidden
    req.user = user;
    next(); // if the token is valid, proceed to the next middleware/route handler
  });
};
module.exports = authenticateToken;
