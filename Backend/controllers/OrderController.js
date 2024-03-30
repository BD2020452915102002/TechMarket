const orderService = require("../services/OrderService");

exports.createOrder = async (req, res) => {
    try {
        const order = await orderService.createOrder(req.body);
        res.json({ data: order, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}