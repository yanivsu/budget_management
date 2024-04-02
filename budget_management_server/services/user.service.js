const UserModel = require("../models/user.model");
module.exports.loginService = async (user) => {
  const auth = await UserModel.userAuth(user);
  console.log(auth);
  // validation for the credentials
  if (!auth.status) {
    throw new Error("username or password are incorrect!");
  } else {
    console.log(`username found.`);
    return auth;
  }
};
