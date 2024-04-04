const Joi = require("joi");
// validate user has a username and password
const userLogin = {
  body: Joi.object().keys({
    user_name: Joi.string().required(),
    user_password: Joi.string().required(),
  }),
};
module.exports = { userLogin };
