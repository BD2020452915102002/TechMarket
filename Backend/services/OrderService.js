const Order = require("../models/order.js");

exports.createOrder = async (order) => {
    return await Order.create(order);
};