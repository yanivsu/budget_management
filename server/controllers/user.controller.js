const UserService = require("../services/user.service");
exports.login = async (req, res, next) => {
  try {
    console.log("entered controller");
    const auth = await UserService.loginService(req.body);
    // TODO use the userName in the front
    // res.cookie('token', token, {
    //   domain: domain,
    //   path: '/',
    //   expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    //   httpOnly: true,
    //   secure: true,
    // });
    return res.status(200).send({ auth });
  } catch (err) {
    res.status(400).json({ Error: err.message });
    next(err);
    return err;
  }
};
