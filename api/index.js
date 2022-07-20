const express = require("express");
const app = express();
const dotenv = require("dotenv");
const colors = require("colors");
const authUser = require("./routes/auth.route");
const userRoute = require("./routes/user");

dotenv.config();
const PORT = process.env.PORT || 5000;

// connect with db
const connectedDB = require("./db/connect");
connectedDB();

// middleware
app.use(express.json());
app.use("/api/auth", authUser);
app.use("/api/users", userRoute);

// listen app
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
