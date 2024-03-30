const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: {
      type: String,
      required: true,
    },
    orderItems: [{
      item: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      price: {
        type: Number,
        required: true,
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