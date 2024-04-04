const mysql = require("mysql");
// import the database connection function
const db = require("../config/db");

// get all user's transactions
exports.getAllTransactions = async (userId) => {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM transactions WHERE user_id = ?";
    db.query(sql, [userId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

// create new transaction
exports.createNewTransaction = async (transaction) => {
  const { transaction_name, amount, type, date, transaction_details, user_id } =
    transaction;
  const sql =
    "INSERT INTO transactions (transaction_name,amount, type, date,transaction_details,user_id) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(
    sql,
    [transaction_name, amount, type, date, transaction_details, user_id],
    (err, res) => {
      if (err) {
        console.log(err);
      }
    },
  );
};

// delete transaction 1 or more
exports.deleteTransactionsByIds = (transaction_ids) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM transactions WHERE transaction_id IN (?)`;
    db.query(sql, [transaction_ids], (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(result.message);
        resolve(result.affectedRows);
      }
    });
  });
};

// updates a transaction only if id was found and the rest of the parameters are optional
// build a sql query only with the parameters that are provided by the update function
exports.updateTransaction = (transaction) => {
  const {
    transaction_id: transactionId,
    transaction_name,
    amount,
    type,
    date,
    transaction_details,
  } = transaction;

  return new Promise((resolve, reject) => {
    let updates = [];
    let params = [];
    // check the id, if not valid throw error
    if (transactionId === undefined || transactionId === null) {
      throw new Error("invalid transaction id");
    }
    // check the rest of the parameters
    if (transaction_name !== undefined && transaction_name !== null) {
      updates.push("transaction_name = ?");
      params.push(transaction_name);
    }
    if (amount !== undefined && amount !== null) {
      updates.push("amount = ?");
      params.push(amount);
    }
    if (type !== undefined && type !== null) {
      updates.push("type = ?");
      params.push(type);
    }
    if (date !== undefined && date !== null) {
      updates.push("date = ?");
      params.push(date);
    }
    if (transaction_details !== undefined && transaction_details !== null) {
      updates.push("transaction_details = ?");
      params.push(transaction_details);
    }

    // construct the query with the provide parameters
    let sql = `UPDATE transactions SET ${updates.join(", ")} WHERE transaction_id = ?`;
    params.push(transactionId);
    db.query(sql, params, (err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(result.message);
        // resolve with the result of the UPDATE operation
        resolve(result);
      }
    });
  });
};
