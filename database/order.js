const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  orderdata: [
    {
      id: String,
      name: String,
      img: String,
      description: String,
      price: Number,
      qty: Number,
      size: String
    }
  ],
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
