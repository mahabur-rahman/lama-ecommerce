const mongoose = require("mongoose");

// cartSchema
const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },

  products: [
    {
      productId: {
        type: String,
      },
      quantity: {
        type: String,
        default: 1,
      },
    },
  ],
});

// create a collection | model
const CartModel = mongoose.model("Cart", cartSchema);

// export
module.exports = CartModel;
