const Category = require("../models/Category.js");
const express = require("express");
const router = express.Router();

// Get all categories

router.post("/add-category", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).json("Item has been added to the database");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;