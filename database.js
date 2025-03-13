const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const DB_URI = process.env.MONGO_URL;

if (!DB_URI) {
  console.error("❌ MONGO_URL is missing in .env file!");
  process.exit(1); // Exit if no MongoDB URI is provided
}

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000, // Increase timeout
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1); // Exit process if DB connection fails
  });

const db = mongoose.connection;

db.on("error", (err) => console.error("❌ Database connection error:", err));
db.on("disconnected", () => console.log("⚠️ Database disconnected!"));

module.exports = db;
