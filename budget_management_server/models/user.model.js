const mysql = require("mysql");
// Import the database connection function
const db = require("../config/db");

// Call the function to get the connection object
exports.userAuth = async (user) => {
  const { user_name, user_password } = user;
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM users WHERE user_name = ? AND user_password = ?";
    db.query(sql, [user_name, user_password], (err, results) => {
      if (err) {
        reject(err);
      } else {
        if (results.length > 0) {
          resolve(true); // User found
        } else {
          resolve(false); // User not found
        }
      }
    });
  });
};
