const UserService = require("../services/user.service");
const jwt = require("jsonwebtoken");

// login controller crate a sign token and returns to the client
exports.login = async (req, res, next) => {
  try {
    const auth = await UserService.loginService(req.body);
    // create and sign a token if user credentials are valid
    if (auth.status) {
      // create a token
      const token = jwt.sign(
        { userId: auth.userId, userName: auth.userName },
        // use the environment variable directly
        process.env.SECRETKEY,
        { expiresIn: "24h" },
      );

      // set the cookie
      res.cookie("token", token);

      // send the response
      return res.status(200).send({ auth });
    } else {
      const error = new Error("username or password are incorrect!");
      // update the status code to 401 Unauthorized
      error.status = 401;
      next(error);
    }
  } catch (err) {
    res.status(500).json({ Error: err.message });
    next(err);
  }
};
