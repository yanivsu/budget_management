const jwt = require("jsonwebtoken");

// authentication middleware, used in each api call to verify the token is valid.
const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;
  if (token == null) return res.sendStatus(401); // if there's no token, return 401 Unauthorized

  jwt.verify(token, process.env.SECRETKEY, (err, user) => {
    // if the token is not valid, return 403 Forbidden
    if (err) return res.sendStatus(403);
    req.user = user;
    // if the token is valid, proceed to the next middleware/route handler
    next();
  });
};
module.exports = authenticateToken;
