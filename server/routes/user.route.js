const express = require("express");
const userController = require("../controllers/user.controller");
const validateInput = require("../src/middlewares/validate");
const validation = require("../src/validations/user.validation");
const authenticateToken = require("../src/middlewares/authenticate");
const router = express.Router();
router.post(
  "/login",
  validateInput(validation.userLogin),
  userController.login,
);
module.exports = router;

/*
* router.post(
  "/createTransaction",
  validateInput(validation.createTransaction),
  BudgetController.createTransaction,
);
* */
