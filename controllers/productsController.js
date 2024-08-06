// DEPENDENCIES
const express = require("express");
const products = express.Router();


// needed for nesting reviews
const reviewsController = require('./reviewsController');

// localhost:4001/products/1/reviews
products.use('/:product_id/reviews', reviewsController);

// Queries
const {
  getAllProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../queries/products");

// Validations
const {
  checkName,
  validatePrice,
} = require("../validations/checkProducts.js");

// INDEX
products.get("/", async (req, res) => {
  try {
    const allProducts = await getAllProducts();
    if (allProducts[0]) {
      res.status(200).json(allProducts);
    } else {
      res.status(500).json({ error: "server error" });
    }
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
});
console.log(products)

// SHOW
products.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProduct(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
});

// CREATE
products.post("/", checkName, validatePrice, async (req, res) => {
  try {
    const product = await createProduct(req.body);
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
products.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await deleteProduct(id);
    if (deletedProduct.id) {
      res.status(200).json(deletedProduct);
    } else {
      res.status(404).json("Product not found");
    }
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
});

// UPDATE
products.put("/:id", checkName, validatePrice, async (req, res) => {
  const { id } = req.params;
  try {
    const updatedProduct = await updateProduct(id, req.body);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = products;
