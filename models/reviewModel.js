const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      require: true,
    },
    rating: {
      type: String,
      require: true,
    },
    comment: {
      type: String,
      require: true,
    },
    productId: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("review", reviewSchema);
