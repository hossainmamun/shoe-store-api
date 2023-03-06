require("dotenv").config();
const userSchema = require("../models/userModels.js");
const jwt = require("jsonwebtoken");

// create token function
const createToken = (id) => {
  const token = jwt.sign({ id }, `${process.env.STORE_SECRET_KEY}`, {
    expiresIn: "2d",
  });
  return token;
};

// user register
const userRegister = async (req, res) => {
  const { user_name, mobile, email, password, isAdmin } = req.body;
  try {
    const user = await userSchema.register(
      user_name,
      mobile,
      email,
      password,
      isAdmin
    );
    const myToken = createToken(user._id);

    res.status(201).json({ user_name, email, myToken, isAdmin });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// user login
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userSchema.login(email, password);
    const myToken = createToken(user._id);
    const user_name = user.user_name;
    const userEmail = user.email;
    const isAdmin = user.isAdmin;
    res.status(200).json({ user_name, userEmail, isAdmin, myToken });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = {
  userRegister,
  userLogin,
};
