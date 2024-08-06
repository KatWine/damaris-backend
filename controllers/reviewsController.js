const express = require('express');
const reviews = express.Router({ mergeParams: true }); // mergeParams is needed to access parent route params

// Queries
const {
  getAllReviews,
  getReview,
  createReview,
  deleteReview,
  updateReview,
} = require("../queries/reviews");

// INDEX
reviews.get("/", async (req, res) => {
  const { product_id } = req.params;
  try {
    const allReviews = await getAllReviews(product_id);
    if (allReviews[0]) {
      res.status(200).json(allReviews);
    } else {
      res.status(500).json({ error: "server error" });
    }
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
});

// SHOW
reviews.get("/:id", async (req, res) => {
  const { id, product_id } = req.params;
  try {
    const review = await getReview(product_id, id);
    if (review) {
      res.json(review);
    } else {
      res.status(404).json({ error: "not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
});

// CREATE
reviews.post("/", async (req, res) => {
  const { product_id } = req.params;
  try {
    const review = await createReview(product_id, req.body);
    res.json(review);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
reviews.delete("/:id", async (req, res) => {
  const { id, product_id } = req.params;
  try {
    const deletedReview = await deleteReview(product_id, id);
    if (deletedReview.id) {
      res.status(200).json(deletedReview);
    } else {
      res.status(404).json("Review not found");
    }
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
});

// UPDATE
reviews.put("/:id", async (req, res) => {
  const { id, product_id } = req.params;
  try {
    const updatedReview = await updateReview(product_id, id, req.body);
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = reviews;
