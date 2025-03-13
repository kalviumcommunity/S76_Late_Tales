const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const DB_URI = process.env.MONGO_URL;

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Database connected successfully!");
});

db.on("error", (err) => {
  console.error("Database connection error:", err);
});

db.on("disconnected", () => {
  console.log("Database disconnected!");
});

module.exports = db;
