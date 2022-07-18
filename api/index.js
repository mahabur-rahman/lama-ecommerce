const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ title: "Home page" });
});

// listen app
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
