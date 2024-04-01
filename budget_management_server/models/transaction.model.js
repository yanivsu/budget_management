const mysql = require("mysql");
// Import the database connection function
const db = require("../config/db");

// Call the function to get the connection object

// authenticate user

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

exports.deleteTransactionById = (transaction_id) => {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM transactions WHERE transaction_id = ?";
    db.query(sql, [transaction_id], (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(result);
        resolve(result.affectedRows); // resolve with affectedRows
      }
    });
  });
};

//
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql'
// });
//
// const Transaction = sequelize.define('transaction', {
//   type: {
//     type: Sequelize.STRING
//   },
//   amount: {
//     type: Sequelize.FLOAT
//   },
//   date: {
//     type: Sequelize.DATE
//   },
//   transaction_name: {
//     type: Sequelize.STRING
//   }
// });
//
// Transaction.sync()
//     .then(() => {
//       console.log('Transaction model synced with database');
//     })
//     .catch(err => {
//       console.error('Unable to sync transaction model:', err);
//     });
//
// module.exports = Transaction;

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
// exports.getAllIncomes = async () => {
//   return new Promise((resolve, reject) => {
//     const sql = 'SELECT * FROM transactions WHERE type = "income"';
//     db.query(sql, (err, results) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// };
// // get all expense transactions
//
// exports.getAllExspenses = async () => {
//   return new Promise((resolve, reject) => {
//     const sql = 'SELECT * FROM transactions WHERE type = "expense"';
//     db.query(sql, (err, results) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// };

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
