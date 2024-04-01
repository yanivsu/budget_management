const User = require("./user");
const db = require("../config/db");
const bcrypt = require("bcrypt");

exports.userAuth = async (user) => {
  const { user_name, user_password } = user;
  const hashPass = await bcrypt.hash(user_password, 10);
  console.log(hashPass);

  // const user1234 = new User(user_name, user_password);
  // console.log(user1234.setPassword(user_name));

  // console.log(user.setPassword(user_password));
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM users WHERE user_name = ?";
    db.query(sql, [user_name], async (err, results) => {
      if (err) {
        reject(err);
      } else {
        if (results.length > 0) {
          const user = new User(results[0].user_name, results[0].user_password);

          // console.log(user.setPassword(user_password));
          // const hashedPassword = await user.setHash(user_password);
          // console.log(hashedPassword);
          // TODO fix this password problem, need to extract encrypted password
          // console.log(user.setPassword(user_password));
          console.log(user);
          if (await user.checkPassword(user_password)) {
            resolve(true); // User found and password match
          } else {
            resolve(false); // User found but password doesn't match
          }
        } else {
          resolve(false); // User not found
        }
      }
    });
  });
};
