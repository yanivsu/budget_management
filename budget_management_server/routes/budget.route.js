const BudgetController = require("../controllers/budget.controller");
const validation = require("../src/validations/transaction.validation");
const validateInput = require("../src/middlewares/validate");
const express = require("express");
const router = express.Router();

router.post(
  "/createTransaction",
  validateInput(validation.createTransaction),
  BudgetController.createTransaction,
);
router.get("/getAllTransactions", BudgetController.getAllTransactions);
router.post("/deleteTransaction", BudgetController.deleteTransactionsByIds);
router.get("/editTransaction", BudgetController.editTransactionById);

// router.post("/userAuth/auth", BudgetController.getUserAuth);
// router.get("/getAllIncomes", BudgetController.getAllIncomeTransactions);
// router.get("/getAllExpenses", BudgetController.getAllExpenseTransactions);
module.exports = router;
