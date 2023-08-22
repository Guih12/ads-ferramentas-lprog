const { products } = require("../../data/productsData");

class ProductController {
  getAll(request, response) {
    return response.json(products);
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

  create(request, response) {
    products.push({ id: 4, description: request.body.description });

    return response.json(products);
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
    let id = Number(req.params.id);

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
