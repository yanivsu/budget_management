// const Joi = require("joi");
// const { json } = require("express");
// const createTransaction = {
//   body: Joi.object().keys({
//     transaction_name: Joi.string().required(),
//     date: Joi.date().required(),
//     amount: Joi.number().required(),
//     type: Joi.string().required().valid("Income", "Expense"),
//   }),
// };
// module.exports = createTransaction;

const Joi = require("joi");
const createTransaction = Joi.object().keys({
  transaction_name: Joi.string().required(),
  date: Joi.date().required(),
  amount: Joi.number().required(),
  type: Joi.string().required().valid("Income", "Expense"),
});
module.exports = { createTransaction };
