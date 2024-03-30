const orderService = require("../services/OrderService");

exports.createOrder = async (req, res) => {
    try {
        const order = await orderService.createOrder(req.body);
        res.json({ data: order, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getOrderById = async (req, res) => {
    try {
        const order = await orderService.getOrderById(req.params.id);
        res.json({ data: order, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const order = await orderService.getAllOrders();
        res.json({ data: order, status: "success" });
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}

exports.updateOrder = async (req, res) => {
    try {
        const order = await orderService.updateOrder(req.params.id, req.body);
        res.json({ data: order, status: "success" });
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}

exports.deleteOrder = async (req, res) => {
    try {
        const order = await orderService.deleteOrder(req.params.id);
        res.json({ data: order, status: "success" });
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}