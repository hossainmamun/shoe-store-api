const cartProductSchema = require("../models/cartProductModel.js");

// create cart product
const createCartProduct = async (req, res) => {
  const {
    product_title,
    product_image,
    product_price,
    product_detail,
    quantity,
    userEmail,
  } = req.body;

  try {
    const cartProduct = await cartProductSchema.create({
      product_title,
      product_image,
      product_price,
      product_detail,
      quantity,
      userEmail,
    });
    res.status(201).json(cartProduct);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// get cart product
const cartProduct = async (req, res) => {
  try {
    const products = await cartProductSchema.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete cart product
const deleteCartProduct = async (req, res) => {
  const cartId = req.params.id;
  try {
    const cartProduct = await cartProductSchema.findByIdAndDelete({
      _id: cartId,
    });
    res.status(200).json(cartProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete order product by use email
const deleteOrderProduct = async (req, res) => {
  const email = req.params.email;
  try {
    const orderProduct = await cartProductSchema.deleteMany({
      userEmail: email,
    });
    res.status(200).json(orderProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCartProduct,
  cartProduct,
  deleteCartProduct,
  deleteOrderProduct,
};
