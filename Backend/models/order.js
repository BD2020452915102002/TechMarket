const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  orderProducts: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    }
  }],
  status: {
    type: String,
    required: true,
    enum: ['Pending', 'Completed', 'Cancelled'],
    default: 'Pending',
  },
  totalCost: {
    type: Number,
    required: true,
  }
}, { timestamps: true });

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;