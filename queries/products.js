const db = require("../db/dbConfig.js");

// Get all products
const getAllProducts = async () => {
  try {
    const allProducts = await db.any("SELECT * FROM products");
    return allProducts;
  } catch (error) {
    return error;
  }
};


// Get a single product by ID
const getProduct = async (id) => {
  try {
    const oneProduct = await db.one("SELECT * FROM products WHERE id=$1", id);
    return oneProduct;
  } catch (error) {
    return error;
  }
};

// Create a new product
const createProduct = async (product) => {
  try {
    const newProduct = await db.one(
      "INSERT INTO products (name, price, description, category, stock) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [product.name, product.price, product.description, product.category, product.stock]
    );
    return newProduct;
} catch (error) {
    console.error("Error creating product:", error); // Log the error for debugging
    throw new Error("Failed to create product"); // Throw a more user-friendly error
  }
};
const deleteProduct = async (id) => {
    try {
      const deletedProduct = await db.one(
        "DELETE FROM products WHERE id = $1 RETURNING *",
        id
      );
      return deletedProduct;
    } catch (error) {
      return error;
    }
  };

// Update a product by ID
const updateProduct = async (id, product) => {
    try {
      const updatedProduct = await db.one(
        "UPDATE products SET name=$1, price=$2, description=$3, category=$4, stock=$5 WHERE id=$6 RETURNING *",
        [product.name, product.price, product.description, product.category, product.stock, id]
      );
      return updatedProduct;
    } catch (error) {
      return error;
    }
  };
  
  module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    deleteProduct,
    updateProduct,
  };