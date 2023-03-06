const express = require("express");
const {
  createProduct,
  allProducts,
  singleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController.js");
const productRouter = express.Router();
const validation = require("../middlewares/validationMiddleware.js");
const { productValidation } = require("../validations/schemaValidation.js");

// post product
productRouter.post("/", validation(productValidation), createProduct);
// get products
productRouter.get("/", allProducts);
// get single product
productRouter.get("/:id", singleProduct);
// update product
productRouter.patch("/:id", updateProduct);
// delete product
productRouter.delete("/:id", deleteProduct);


module.exports = productRouter;
