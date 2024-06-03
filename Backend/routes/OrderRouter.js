const express = require("express")
const router = express.Router()
const moment = require("moment");
const Order = require("../models/order.js"); // Import your Order model
const { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder } = require("../controllers/OrderController")
const { isEmployee, isManager, isCustomer } = require("../middleware/auth")
const { checkOrderAccess } = require("../middleware/AccessOrder")

router.route("/").get(isEmployee, getAllOrders).post(createOrder);

//GET ORDERS STATS
router.get("/stats", isManager, async (req, res) => {
    const previousMonth = moment()
        .month(moment().month() - 5)
        .set("data", 1)
        .format("YYYY-MM-DD HH:mm:ss");

    try {

        // User MongoDB Aggregation Operations
        const orders = await Order.aggregate([
            {
                $match: { createdAt: { $gte: new Date(previousMonth) } },
            },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);

        res.status(200).send(orders);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});


//GET INCOME STATS
router.get("/income/stats", isManager, async (req, res) => {
    const previousMonth = moment()
        .month(moment().month() - 5)
        .set("data", 1)
        .format("YYYY-MM-DD HH:mm:ss");

    try {
        // User MongoDB Aggregation Operations

        const income = await Order.aggregate([
            {
                $match: { createdAt: { $gte: new Date(previousMonth) } },
            },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$total",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ]);

        res.status(200).send(income);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

//GET 1 WEEK SALES
router.get("/week-sales", isManager, async (req, res) => {
    const last7Days = moment()
        .day(moment().day() - 7)
        .format("YYYY-MM-DD HH:mm:ss");

    try {
        // User MongoDB Aggregation Operations

        const income = await Order.aggregate([
            {
                $match: { createdAt: { $gte: new Date(last7Days) } },
            },
            {
                $project: {
                    day: { $dayOfWeek: "$createdAt" },
                    sales: "$total",
                },
            },
            {
                $group: {
                    _id: "$day",
                    total: { $sum: "$sales" },
                },
            },
        ]);

        res.status(200).send(income);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

//GET USER ORDERS
router.get("/find/:userId", isEmployee, async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.status(200).send(orders);
    } catch (err) {
        res.status(500).send(err);
    }
});


router.get("/findOne/:id", isEmployee, async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        res.status(200).send(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.route("/:id").get(isEmployee, getOrderById).put(checkOrderAccess, updateOrder).delete(isEmployee, deleteOrder);

module.exports = router;