const bcrypt = require("bcrypt");
const db = require("../config/db");
const saltRounds = 10;

class User {
  constructor(username, password, bcrypt) {
    this.username = username;
    this.password = this.setPassword(password);
  }

  setHash(password) {
    return bcrypt.hash(password, saltRounds);
  }

  setPassword(password) {
    return bcrypt.hashSync(password, saltRounds);
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

module.exports = User;
