const BudgetController = require("../controllers/budget.controller");
const authenticateToken = require("../src/middlewares/authenticate");
const validation = require("../src/validations/transaction.validation");
const validateInput = require("../src/middlewares/validate");
const express = require("express");
const router = express.Router();

// route uses a validation of parameters for requests
router.post(
  "/createTransaction",
  authenticateToken,
  validateInput(validation.createTransaction),
  BudgetController.createTransaction,
);
router.get(
  "/getAllTransactions/:userId",
  authenticateToken,
  validateInput(validation.getTransaction),
  BudgetController.getAllTransactions,
);

// route uses validation that requires transaction_id parameter
router.delete(
  "/deleteTransaction",
  authenticateToken,
  validateInput(validation.deleteTransaction),
  BudgetController.deleteTransactionsByIds,
);

// route uses validation that requires at least transaction_id parameter
router.put(
  "/updateTransaction",
  authenticateToken,
  validateInput(validation.updateTransaction),
  BudgetController.updateTransactionById,
);
// route to check validation of token for client requests
router.get("/verifyToken", authenticateToken, (req, res) => {
  // If the token is verified, send a success response
  res.send("Token is valid");
});

module.exports = router;
