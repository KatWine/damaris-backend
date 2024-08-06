const db = require("../db/dbConfig.js");

// Get all reviews for a specific product
const getAllReviews = async (product_id) => {
  try {
    const allReviews = await db.any("SELECT * FROM reviews WHERE product_id=$1", product_id);
    return allReviews;
  } catch (error) {
    return error;
  }
};

// Get a single review by ID
const getReview = async (id) => {
  try {
    const oneReview = await db.one("SELECT * FROM reviews WHERE id=$1", id);
    return oneReview;
  } catch (error) {
    return error;
  }
};

// Create a new review for a product
const newReview = async (review) => {
  try {
    const createdReview = await db.one(
      "INSERT INTO reviews (reviewer, title, content, rating, product_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        review.reviewer,
        review.title,
        review.content,
        review.rating,
        review.product_id, 
      ]
    );
    return createdReview;
  } catch (error) {
    return error;
  }
};

// Delete a review by ID
const deleteReview = async (id) => {
  try {
    const deletedReview = await db.one(
      "DELETE FROM reviews WHERE id = $1 RETURNING *",
      id
    );
    return deletedReview;
  } catch (error) {
    return error;
  }
};

// Update a review by ID
const updateReview = async (review) => {
  try {
    const updatedReview = await db.one(
      "UPDATE reviews SET reviewer=$1, title=$2, content=$3, rating=$4, product_id=$5 WHERE id=$6 RETURNING *",
      [
        review.reviewer,
        review.title,
        review.content,
        review.rating,
        review.product_id, 
        review.id,
      ]
    );
    return updatedReview;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllReviews,
  getReview,
  newReview,
  deleteReview,
  updateReview,
};
