const express = require("express");
const db = require("./database"); // Ensure database connection is established first
const routes = require("./routes"); // Import routes.js

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Use the defined routes
app.use("/api", routes);

// Start the server only after DB connection is established
db.once("open", () => {
  console.log("✅ Database connection is open. Starting the server...");
  app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
  });
});
