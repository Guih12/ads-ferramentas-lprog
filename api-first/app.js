require("dotenv").config();
const express = require("express");
const { routes } = require("./src/routes");
const Database = require("./src/db/database");

const app = express();
const db = Database.create("postgres");

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

async function main() {
  await db.connect();

  const users = await db.query("SELECT * FROM products");
  console.log("Users:", users);

  await db.disconnect();
}

main().catch((error) => {
  console.error("Application error:", error);
});

app.listen(process.env.DEVELOPMENT_PORT, async () => {
  console.log(
    `Running my server express on port: ${process.env.DEVELOPMENT_PORT}`,
  );
});
