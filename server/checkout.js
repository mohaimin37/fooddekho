const express = require("express");
const checkout = express();
const Order = require("../database/order");

// POST route to save orders
checkout.post("/cart", async (req, res) => {
  const { email, orderdata } = req.body;

  try {
    // Add current date to start of order array
    const orderWithDate = [{ date: new Date().toISOString() }, ...orderdata];

    // Save as one grouped order
    await Order.create({
      email,
      orderdata: [orderWithDate], // wrapped in [] to group each checkout as a unit
    });

    res.status(200).json({ success: true, message: "Order placed successfully" });
  } catch (error) {
    console.error("Order Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = checkout;
