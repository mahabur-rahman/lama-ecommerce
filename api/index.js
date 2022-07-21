const express = require("express");
const app = express();
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");

// route
const authUser = require("./routes/auth.route");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product.route");
const cartRoute = require("./routes/cart.route");
const orderRoute = require("./routes/order.route");
const stripeRoute = require("./routes/stripe.route");

dotenv.config();
const PORT = process.env.PORT || 5000;

// connect with db
const connectedDB = require("./db/connect");
connectedDB();

// middleware
app.use(cors());
app.use(express.json());

// route path
app.use("/api/auth", authUser);
app.use("/api/users", userRoute);
app.use("/api/carts", cartRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

// listen app
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
