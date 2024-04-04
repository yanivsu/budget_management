// exports.login = async (req, res, next) => {
//   try {
//     console.log("entered controller");
//     const auth = await UserService.loginService(req.body);
//     // res.cookie('token', token, {
//     //   domain: domain,
//     //   path: '/',
//     //   expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
//     //   httpOnly: true,
//     //   secure: true,
//     // });
//     return res.status(200).send({ auth });
//   } catch (err) {
//     res.status(400).json({ Error: err.message });
//     next(err);
//     return err;
//   }
// };
// require("dotenv").config();

const UserService = require("../services/user.service");

const jwt = require("jsonwebtoken");

exports.login = async (req, res, next) => {
  try {
    console.log("entered controller");
    const auth = await UserService.loginService(req.body);

    if (auth.status) {
      // Create a token
      const token = jwt.sign(
        { userId: auth.userId, userName: auth.userName },
        process.env.SECRETKEY, // Use the environment variable directly
        { expiresIn: "1h" },
      );

      // Set the cookie
      res.cookie("token", token, { httpOnly: true, sameSite: "none" });

      // Send the response
      return res.status(200).send({ auth });
    } else {
      const error = new Error("username or password are incorrect!");
      error.status = 401; // Set the status code to 401 Unauthorized
      next(error);
    }
  } catch (err) {
    res.status(500).json({ Error: err.message });
    next(err);
  }
};
