const BudgetController = require("../controllers/budget.controller");
const validation = require("../src/validations/transaction.validation");
const validateInput = require("../src/middlewares/validate");
const express = require("express");
const { valid } = require("joi");
const router = express.Router();

// route uses a validation of parameters for requests
router.post(
  "/createTransaction",
  validateInput(validation.createTransaction),
  BudgetController.createTransaction,
);
router.get("/getAllTransactions", BudgetController.getAllTransactions);

// route uses validation that requires transaction_id parameter
router.delete(
  "/deleteTransaction",
  validateInput(validation.deleteTransaction),
  BudgetController.deleteTransactionsByIds,
);

// route uses validation that requires at least transaction_id parameter
router.put(
  "/updateTransaction",
  validateInput(validation.updateTransaction),
  BudgetController.updateTransactionById,
);

module.exports = router;
