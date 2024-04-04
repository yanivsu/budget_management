const BudgetModel = require("../models/transaction.model");

// add a new transaction
module.exports.createTransactionService = async (transaction) => {
  await BudgetModel.createNewTransaction(transaction);
  return true;
};

// get all transaction
module.exports.getAllTransactionsService = async (userId) => {
  const transactions = await BudgetModel.getAllTransactions(userId);
  if (!transactions) {
    throw new Error("No Transactions");
  } else {
    console.log(`Fetched ${transactions.length} transactions.`);
    return transactions;
  }
};

// delete transaction by id
module.exports.deleteTransactionsByIdsService = async (transactionIds) => {
  const affectedRows =
    await BudgetModel.deleteTransactionsByIds(transactionIds);
  return affectedRows;
};

// update transaction by id
module.exports.updateTransactionByIdService = async (transaction) => {
  const updatedTransaction = await BudgetModel.updateTransaction(transaction);
  return updatedTransaction.affectedRows;
};
