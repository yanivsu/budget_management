const db = require("../config/db");
const bcrypt = require("bcrypt");

// user model
exports.userAuth = async (user) => {
  const { user_name, user_password } = user;
  return new Promise((resolve, reject) => {
    const sql =
      "SELECT user_id, user_name, user_password FROM users WHERE user_name = ?";
    db.query(sql, [user_name], async (err, results) => {
      if (err) {
        reject(err);
      } else {
        if (results.length > 0) {
          let hashedPass = results[0].user_password;
          let userId = results[0].user_id;
          let user_name = results[0].user_name;

          console.log("User ID from db: " + userId);

          if (await bcrypt.compare(user_password, hashedPass)) {
            resolve({ status: true, userId: userId, userName: user_name }); // User found and password match
          } else {
            resolve({ status: false }); // User found but password doesn't match
          }
        } else {
          resolve({ status: false }); // User not found
        }
      }
    });
  });
};
