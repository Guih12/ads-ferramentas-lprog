require("dotenv").config();
const express = require("express");
const { routes } = require("./src/routes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

app.use(routes);

app.listen(process.env.DEVELOPMENT_PORT, () => {
  console.log(
    `Running my server express on port: ${process.env.DEVELOPMENT_PORT}`,
  );
});
