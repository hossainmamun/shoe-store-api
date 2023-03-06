const mongoose = require("mongoose");

const cartProductSchema = new mongoose.Schema(
  {
    product_image: {
      type: String,
      require: true,
    },
    product_title: {
      type: String,
      require: true,
    },
    product_price: {
      type: Number,
      require: true,
    },
    product_detail: {
      type: String,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    userEmail: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("cartProduct", cartProductSchema);
