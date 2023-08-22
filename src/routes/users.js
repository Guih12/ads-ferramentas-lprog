require("dotenv").config();
const Router = require("express");
const UserController = require("../controller/user/userController");

const userRouter = Router();
const userController = new UserController();

userRouter
  .route(`/${process.env.API_PATH}/users`)
  .get((req, res) => userController.getAll(req, res));

module.exports = { userRouter };
