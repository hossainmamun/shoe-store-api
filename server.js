require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 2000;

// routes list
const userRouter = require("./routes/userRoute.js");
const productRouter = require("./routes/productRoute.js");
const cartProductRouter = require("./routes/cartProductRoute.js");
const reviewRouter = require("./routes/reviewRoute.js");

// use express
const app = express();
app.use(cors());
app.use(express.json());

// root server
app.get("/", (req, res) => {
  res.send({
    message: "shoe-store server",
    date: new Date().toLocaleDateString(),
  });
});

// use routes list
app.use("/api/user", userRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartProductRouter);
app.use("/api/review", reviewRouter);

// mongoose connection
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("database connected");
    app.listen(port, () => {
      console.log(`server is running : ${port}`);
    });
  })
  .catch((error) => {
    console.log({ error: error.message });
  });
