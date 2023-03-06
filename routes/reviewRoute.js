const express = require("express");
const {
  createReview,
  reviewList,
} = require("../controllers/reviewController.js");
const validation = require("../middlewares/validationMiddleware.js");
const { reviewValidation } = require("../validations/schemaValidation.js");
const reviewRouter = express.Router();

reviewRouter.post("/", validation(reviewValidation), createReview);
reviewRouter.get("/:id", reviewList);

module.exports = reviewRouter;
