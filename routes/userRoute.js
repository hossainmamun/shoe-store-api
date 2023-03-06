const express = require("express");
const { userRegister, userLogin } = require("../controllers/userController.js");
const userRoute = express.Router();
const validation = require("../middlewares/validationMiddleware.js");
const {
  registerValidation,
  loginValidation,
} = require("../validations/schemaValidation.js");

// user registration route
userRoute.post("/register", validation(registerValidation), userRegister);
userRoute.post("/login", validation(loginValidation), userLogin);

module.exports = userRoute;
