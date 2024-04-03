const Joi = require("joi");
const userLogin = {
  body: Joi.object().keys({
    user_name: Joi.string().required(),
    user_password: Joi.string().required(),
  }),
};
module.exports = { userLogin };
