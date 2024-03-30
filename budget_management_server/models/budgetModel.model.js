const mysql = require("mysql");
// Import the database connection function
const db = require("../config/db");

// Call the function to get the connection object

// create new transaction
exports.createNewTransaction = async (transaction) => {
  const { transaction_name, amount, type, date } = transaction;
  const sql =
    "INSERT INTO transactions (transaction_name,amount, type, date) VALUES (?, ?, ?, ?)";
  db.query(sql, [transaction_name, amount, type, date], (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
};

// exports.getAllTransactions = async () => {
//     const sql = 'SELECT * FROM transactions';
//     db.query(sql, (err, results) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(results);
//             return results
//         }
//     });
// }

// get all transactions
exports.getAllTransactions = async () => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM transactions";
    db.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// TODO fix get all incomed and expenses
// get all income transactions
exports.getAllIncomes = async () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM transactions WHERE type = "income"';
    db.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
// get all expense transactions

exports.getAllExspenses = async () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM transactions WHERE type = "expense"';
    db.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// const Transaction = {
//     create: (transaction, callback) => {
//         const {transaction_name, amount, type, date} = transaction;
//         const query = 'INSERT INTO Transactions (transaction_name,amount, type, date) VALUES (?, ?, ?, ?)';
//         db.query(query, [transaction_name, amount, type, date], callback);
//     },
//     // Add other methods as needed (e.g., find, update, delete)
// };
//
// module.exports = Transaction;
