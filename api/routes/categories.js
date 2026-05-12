const Category = require("../models/Category.js");
const express = require("express");
const router = express.Router();

// Get all categories
router.get("/get-all", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
  }
});

// Add a new category
router.post("/add-category", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).json("Item has been added to the database");
  } catch (err) {
    res.status(400).json(err);
  }
});

//! update category
router.put("/update-category", async (req, res) => {
  try {
    await Category.findOneAndUpdate({ _id: req.body.categoryId }, req.body);
    res.status(200).json("Item updated successfully.");
  } catch (error) {
    console.log(error);
  }
});

//! delete
router.delete("/delete-category", async (req, res) => {
  try {
    await Category.findOneAndDelete({ _id: req.body.categoryId });
    res.status(200).json("Item deleted successfully.");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;