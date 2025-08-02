const express = require("express");
const myorder = express();
const Order = require("../database/order");

// POST route to get user's orders
myorder.post("/myorder", async (req, res) => {
  const { email } = req.body;

  try {
    const orders = await Order.find({ email }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.error("Fetch Order Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = myorder;
