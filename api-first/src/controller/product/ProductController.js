const { products } = require("../../data/productsData");
const Database = require("../../db/database");

class ProductController {
  async getAll(request, response) {
    const database = Database.create("postgres")
    await database.connect();

    const result = await database.query("SELECT * FROM products")

    await database.disconnect();

    return response.json(result);
  }

  getById(request, response) {
    const id = Number(request.params.id);

    const product = products.find((p) => p.id === id);

    if (!product)
      return response
        .status(404)
        .json({ status: 404, message: "Product not found" });

    response.json(product);
  }

  async create(request, response) {
    const database = Database.create("postgres");

    await database.connect();

    const result = await database.query(
      "INSERT INTO products(description) VALUES($1) RETURNING *",
      [request.body.description],
    );

    await database.disconnect();

    return response.json(result);
  }

  update(request, response) {
    let { name } = req.body;
    let id = Number(req.params.id);

    const product = products.find((p) => p.id === id);

    if (!product)
      return res.status(404).json({
        status: 404,
        message: "Product not found!",
      });

    products[id].name = name;

    return response.json(products[id]);
  }

  delete(request, response) {
    let id = Number(request.params.id);

    const product = products.find((p) => p.id === id);

    if (!product)
      return res.status(404).json({
        status: 404,
        message: "Product not found!",
      });

    products = products.filter((p) => p.id !== id);

    return response.json({
      status: 204,
      message: "Product deleted!",
    });
  }
}

module.exports = ProductController;
