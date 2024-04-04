const BudgetController = require("../controllers/budget.controller");
const authenticateToken = require("../src/middlewares/authenticate");
const validation = require("../src/validations/transaction.validation");
const validateInput = require("../src/middlewares/validate");
// const verifyToken = require("../src/middlewares/verifyToken");
const express = require("express");
const { valid } = require("joi");
const router = express.Router();

// route uses a validation of parameters for requests
router.post(
  "/createTransaction",
  // authenticateToken,
  validateInput(validation.createTransaction),
  BudgetController.createTransaction,
);
router.get("/getAllTransactions/:userId", BudgetController.getAllTransactions);

// route uses validation that requires transaction_id parameter
router.delete(
  "/deleteTransaction",
  // authenticateToken,
  validateInput(validation.deleteTransaction),
  BudgetController.deleteTransactionsByIds,
);

// route uses validation that requires at least transaction_id parameter
router.put(
  "/updateTransaction",
  // authenticateToken,
  validateInput(validation.updateTransaction),
  BudgetController.updateTransactionById,
);

// router.get("/verifyToken", verifyToken, (req, res) => {
//   // If the token is verified, send a success response
//   res.send("Token is valid");
// });

module.exports = router;
