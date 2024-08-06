//import installed packages
const express = require('express')
const cors=require('cors')
const productsController = require('./controllers/productsController.js')
const reviewsController = require('./controllers/reviewsController.js')

//store install into a variable
const app = express();

//mount middleware
app.use(cors());
app.use(express.json());

// routes 
app.get("/", (req, res)=>{
    res.send("Home")
})

// Route to get products
app.use("/products", productsController);
  
  // Route to get reviews
  app.use("/reviews", reviewsController);

//error mssgs
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });
  
module.exports = app;