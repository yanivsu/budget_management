const Joi = require("joi");

// Validation for create transaction
const createTransaction = {
  body: Joi.object().keys({
    transaction_name: Joi.string().required(),
    date: Joi.date().required(),
    amount: Joi.number().required(),
    type: Joi.string().required().valid("Income", "Expense"),
  }),
};
// Validation for deleting a transaction
const deleteTransaction = {
  body: Joi.object().keys({
    transaction_id: Joi.number().required(),
  }),
};

// Validation for editing a transaction
const editTransaction = {
  body: Joi.object().keys({
    transaction_id: Joi.number().required(),
    transaction_name: Joi.string(),
    date: Joi.date(),
    amount: Joi.number(),
    type: Joi.string().valid("Income", "Expense"),
  }),
};

module.exports = { createTransaction };
