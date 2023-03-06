const productSchema = require("../models/productModel.js");

// error message function
const errorStatus = (response, code, err) => {
  return response.status(code).json({ err: err.message });
};

// create product
const createProduct = async (req, res) => {
  const {
    product_image,
    product_title,
    product_price,
    product_status,
    product_detail,
  } = req.body;

  try {
    const product = await productSchema.create({
      product_image,
      product_title,
      product_price,
      product_status,
      product_detail,
    });
    res.status(201).json(product);
  } catch (error) {
    errorStatus(res, 401, error);
  }
};

// get all product
const allProducts = async (req, res) => {
  try {
    const products = await productSchema.find({});
    res.status(200).json(products);
  } catch (error) {
    errorStatus(res, 400, error);
  }
};

// get a single product
const singleProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await productSchema.findById({ _id: productId });
    res.status(200).json(product);
  } catch (error) {
    errorStatus(res, 400, error);
  }
};

// update product
const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const {
    product_image,
    product_title,
    product_price,
    product_status,
    product_detail,
  } = req.body;
  try {
    const product = await productSchema.findByIdAndUpdate(
      { _id: productId },
      {
        product_image,
        product_title,
        product_price,
        product_status,
        product_detail,
      },
      { returnOriginal: false }
    );
    res.status(200).json(product);
  } catch (error) {
    errorStatus(res, 400, error);
  }
};

// delete product
const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productSchema.findByIdAndDelete({ _id: productId });
    res.status(200).json(product);
  } catch (error) {
    errorStatus(res, 400, error);
  }
};


module.exports = {
  createProduct,
  allProducts,
  singleProduct,
  updateProduct,
  deleteProduct,
};
