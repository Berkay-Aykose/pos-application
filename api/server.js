const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const port = 5000;

// Import routes
const categoryRoute = require("./routes/categories.js");

dotenv.config();

const connectDB = async () => { 
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");}
  catch (error) {
    throw error;
  }
};

app.use(express.json());
app.use(cors());

app.use("/api", categoryRoute);

app.listen(port, () => {
  connectDB();
  console.log(`Example app listening on port ${port}`);
});