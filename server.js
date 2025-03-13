const express = require("express");

const db = require("./database"); // Import db from database.js

const app = express();
const port = 3000;

app.get("/ping", (req, res) => {
  res.send("Pong!");
});

app.get("/", (req, res) => {
  const dbStatus = db.readyState === 1 ? "Connected" : "Not Connected";
  res.json({ message: "Welcome to Home Page", database: dbStatus });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
