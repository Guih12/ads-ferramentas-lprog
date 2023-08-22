require("dotenv").config();
const Router = require("express");
const routes = Router();

const { productRouter } = require("./routes/products");
const { userRouter } = require("./routes/users");

routes.use(productRouter, userRouter);

module.exports = { routes };
