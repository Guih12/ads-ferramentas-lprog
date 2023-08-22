require("dotenv").config();
const Router = require("express");
const ProductController = require("../controller/product/ProductController");

const productRouter = Router();

const productController = new ProductController();

productRouter
  .route(`/${process.env.API_PATH}/products`)
  .get((req, res) => productController.getAll(req, res))
  .post((req, res) => productController.create(req, res));

productRouter
  .route(`/${process.env.API_PATH}/products/:id`)
  .get((req, res) => productController.getById(req, res))
  .put((req, res) => productController.update(req, res))
  .delete((req, res) => productController.delete(req, res));

module.exports = { productRouter };
