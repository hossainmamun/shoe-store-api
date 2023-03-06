const reviewSchema = require("../models/reviewModel.js");

// create review
const createReview = async (req, res) => {
  const { user_name, rating, comment, productId } = req.body;
  try {
    const review = await reviewSchema.create({
      user_name,
      rating,
      comment,
      productId,
    });
    console.log(review);
    res.status(201).json(review);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// get reviews by product id
const reviewList = async (req, res) => {
  const product_id = req.params.id;
  try {
    const review = await reviewSchema.find({ productId: product_id });
    res.status(200).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createReview, reviewList };
