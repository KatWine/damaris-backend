// validations/checkProducts.js
const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
  } else {
    res.status(400).json({ error: "Product name is required" });
  }
};

const validatePrice = (req, res, next) => {
  if (typeof req.body.price === 'number') {
    next();
  } else {
    res.status(400).json({ error: "Product price must be a number" });
  }
};

module.exports = {
  checkName,
  validatePrice,
};
