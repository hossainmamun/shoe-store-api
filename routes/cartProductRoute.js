const express = require("express");
const {
  createCartProduct,
  cartProduct,
  deleteCartProduct,
  deleteOrderProduct,
} = require("../controllers/cartProductController.js");
const cartProductRouter = express.Router();

cartProductRouter.post("/", createCartProduct);
cartProductRouter.get("/", cartProduct);
cartProductRouter.delete("/:id", deleteCartProduct);
cartProductRouter.delete("/order/:email", deleteOrderProduct);

module.exports = cartProductRouter;
