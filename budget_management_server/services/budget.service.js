const BudgetModel = require("../models/transaction.model");

module.exports.createTransactionService = async (transaction) => {
  await BudgetModel.createNewTransaction(transaction);
  // await BudgetModel.create()
  return true;
};

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

module.exports.getAllTransactionsService = async () => {
  const transactions = await BudgetModel.getAllTransactions();
  if (!transactions) {
    throw new Error("No Transactions");
  } else {
    console.log(`Fetched ${transactions.length} transactions.`);
    return transactions;
  }
};

// module.exports.getAllIncomesService = async () => {
//   const transactions = await BudgetModel.getAllIncomes();
//   if (!transactions) {
//     throw new Error("No Income Transactions");
//   } else {
//     console.log(`Fetched ${transactions.length} transactions.`);
//     return transactions;
//   }
// };

// module.exports.getAllExpensesService = async () => {
//   const transactions = await BudgetModel.getAllExspenses();
//   if (!transactions) {
//     throw new Error("No Expense Transactions");
//   } else {
//     console.log(`Fetched ${transactions.length} transactions.`);
//     return transactions;
//   }
// };
