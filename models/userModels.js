const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      require: true,
    },
    mobile: {
      type: Number,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      require: true,
    },
  },
  { timestamps: true },
  { $position: 0 }
);

// static register method
userSchema.statics.register = async function (
  user_name,
  mobile,
  email,
  password,
  isAdmin
) {
  // check existing email
  const existEmail = await this.findOne({ email: email });
  if (existEmail) {
    throw new Error("Sorry email already in used");
  }

  // password hashing
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(password, salt);

  // create user
  const user = await this.create({
    user_name,
    mobile,
    email,
    password: hashPass,
    isAdmin,
  });
  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  // check email and password is exist
  const user = await this.findOne({ email: email });
  if (!user) {
    throw new Error("Invalid action");
  }
  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    throw new Error("Invalid action");
  }
  return user;
};

module.exports = mongoose.model("user", userSchema);
