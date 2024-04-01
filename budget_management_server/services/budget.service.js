const BudgetModel = require("../models/transaction.model");

// Add a new Transaction
module.exports.createTransactionService = async (transaction) => {
  await BudgetModel.createNewTransaction(transaction);
  // await BudgetModel.create()
  return true;
};

// Get all transaction
module.exports.getAllTransactionsService = async () => {
  const transactions = await BudgetModel.getAllTransactions();
  if (!transactions) {
    throw new Error("No Transactions");
  } else {
    console.log(`Fetched ${transactions.length} transactions.`);
    return transactions;
  }
};

// Delete transaction by id
module.exports.deleteTransactionsByIdsService = async (transactionIds) => {
  const affectedRows =
    await BudgetModel.deleteTransactionsByIds(transactionIds);
  return affectedRows;
};

module.exports.editTransactionByIdService = async () => {
  const transactions = await BudgetModel.editTransactionByIdModel();
  if (!transactions) {
    throw new Error("No Transactions");
  } else {
    console.log(`Fetched ${transactions.length} transactions.`);
    return transactions;
  }
};

// Transaction.create({
//   type: "Expense",
//   amount: 100.5,
//   date: new Date(),
//   transaction_name: "Grocery Shopping",
// })
//   .then((newTransaction) => {
//     console.log("New transaction created:", newTransaction.toJSON());
//   })
//   .catch((err) => {
//     console.error("Error creating transaction:", err);
//   });

// module.exports.getAllTransactionsService = async () => {
//
//         throw new Error("no transaction");
//     } else {
//         console.log(`New transaction registered: Name: ${transaction.transaction_name} , Amount: ${transaction.amount} , Type: ${transaction.type}, Date: ${transaction.date}`);
//         await BudgetModel.createNewTransaction(transaction);
//         // await BudgetModel.create()
//         return true;
//     }
// }
