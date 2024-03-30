const budgetController = require("../controllers/budget.controller");
const express = require("express");
const router = express.Router();

router.post("/createTransaction", budgetController.createTransaction);
router.get("/getAllTransactions", budgetController.getAllTransactions);
router.get("/getAllIncomes", budgetController.getAllIncomeTransactions);
router.get("/getAllExpenses", budgetController.getAllExpenseTransactions);
module.exports = router;
