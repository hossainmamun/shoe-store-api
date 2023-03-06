const yup = require("yup");

// register
const registerValidation = yup.object().shape({
  user_name: yup.string().max(16).required(),
  mobile: yup.string().min(11).max(11).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(16).required(),
});

// login
const loginValidation = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(16).required(),
});

// product field validation
const productValidation = yup.object().shape({
  product_image: yup.string().required(),
  product_title: yup.string().required(),
  product_price: yup.number().required(),
  product_status: yup.number().required(),
  product_detail: yup.string().required(),
});

// review field validation
const reviewValidation = yup.object().shape({
  rating: yup.string().required(),
  comment: yup.string().required(),
});

module.exports = {
  registerValidation,
  loginValidation,
  productValidation,
  reviewValidation,
};
