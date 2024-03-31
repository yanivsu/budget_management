const UserService = require("../services/user.service");
exports.getUserAuth = async (req, res, next) => {
  try {
    console.log("entered controller");
    const auth = await UserService.getUserAuthService(req.body);
    return res.status(200).send({ auth });
  } catch (err) {
    res.status(400).json({ Error: err.message });
    next(err);
    return err;
  }
};
