const Joi = require("joi");

// Validation for creating a transaction that all the parameters are a specific type and all is required
const createTransaction = {
  body: Joi.object().keys({
    transaction_name: Joi.string().required(),
    date: Joi.date().required(),
    amount: Joi.number().required(),
    type: Joi.string().required().valid("income", "expense"),
    transaction_details: Joi.string().required(),
    user_id: Joi.number().required(),
  }),
};
// Validation for deleting a transaction that it is an array of integers >0
const deleteTransaction = {
  body: Joi.object().keys({
    transactionIds: Joi.array().items(Joi.number().integer()).min(1).required(),
  }),
};

// Validation for updating  a transaction that it must have a transaction id and all other parameters are optional
// with and each of them has a specific data type
const updateTransaction = {
  body: Joi.object().keys({
    transaction_id: Joi.number().required(),
    transaction_name: Joi.string(),
    date: Joi.date(),
    amount: Joi.number(),
    type: Joi.string().valid("income", "expense"),
    transaction_details: Joi.string().required(),
    user_id: Joi.number().required(),
  }),
};

module.exports = { createTransaction, deleteTransaction, updateTransaction };
