const express = require("express");
const userController = require("../controllers/user.controller");
const validateInput = require("../src/middlewares/validate");
const validation = require("../src/validations/user.validation");
const router = express.Router();

// route uses a validation of parameters for login request
router.post(
  "/login",
  validateInput(validation.userLogin),
  userController.login,
);
module.exports = router;
