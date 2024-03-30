// Import the Transaction model
// const Transaction = require("../models/budgetModel.model");
// Import the Budget Service
const BudgetService = require("../services/budget.service");

// create new transaction
exports.createTransaction = async (req, res, next) => {
  try {
    const transaction = req.body;
    // const { name, amount, type, date } = income;
    const newTransaction =
      await BudgetService.createTransactionService(transaction);

    return res.status(200).send({ newTransaction });
  } catch (err) {
    res.status(400).json({ Error: err.message });
    next(err);
    return err;
  }
};

exports.getAllTransactions = async (req, res, next) => {
  try {
    const transactions = await BudgetService.getAllTransactionsService();
    return res.status(200).send({ transactions });
  } catch (err) {
    res.status(400).json({ Error: err.message });
    next(err);
    return err;
  }
};

exports.getAllIncomeTransactions = async (req, res, next) => {
  try {
    const transactions = await BudgetService.getAllIncomesService();
    return res.status(200).send({ transactions });
  } catch (err) {
    res.status(400).json({ Error: err.message });
    next(err);
    return err;
  }
};

exports.getAllExpenseTransactions = async (req, res, next) => {
  try {
    const transactions = await BudgetService.getAllExpensesService();
    return res.status(200).send({ transactions });
  } catch (err) {
    res.status(400).json({ Error: err.message });
    next(err);
    return err;
  }
};
