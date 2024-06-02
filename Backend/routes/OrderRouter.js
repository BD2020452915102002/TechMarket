const express = require("express")
const router = express.Router()
const { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder } = require("../controllers/OrderController")
const { isEmployee, isManager, isCustomer } = require("../middleware/auth")
const { checkOrderAccess } = require("../middleware/AccessOrder")

router.route("/").get(isEmployee, getAllOrders).post(createOrder);
router.route("/:id").get(getOrderById).put(checkOrderAccess, updateOrder).delete(isEmployee, deleteOrder);

// //GET ORDERS STATS
// router.route("/stats").get(isManager, async (req, res) => {
//     const previousMonth = moment()
//         .month(moment().month() - 5)
//         .set("data", 1)
//         .format("YYYY-MM-DD HH:mm:ss");

//     try {
//         // User MongoDB Aggregation Operations

//         const orders = await Order.aggregate([
//             {
//                 $match: { createdAt: { $gte: new Date(previousMonth) } },
//             },
//             {
//                 $project: {
//                     month: { $month: "$createdAt" },
//                 },
//             },
//             {
//                 $group: {
//                     _id: "$month",
//                     total: { $sum: 1 },
//                 },
//             },
//         ]);

//         res.status(200).send(orders);
//     } catch (err) {
//         console.log(err);
//         res.status(500).send(err);
//     }
// });

// //GET INCOME STATS
// router.get("/income/stats", isManager, async (req, res) => {
//     const previousMonth = moment()
//         .month(moment().month() - 5)
//         .set("data", 1)
//         .format("YYYY-MM-DD HH:mm:ss");

//     try {
//         // User MongoDB Aggregation Operations

//         const income = await Order.aggregate([
//             {
//                 $match: { createdAt: { $gte: new Date(previousMonth) } },
//             },
//             {
//                 $project: {
//                     month: { $month: "$createdAt" },
//                     sales: "$total",
//                 },
//             },
//             {
//                 $group: {
//                     _id: "$month",
//                     total: { $sum: "$sales" },
//                 },
//             },
//         ]);

//         res.status(200).send(income);
//     } catch (err) {
//         console.log(err);
//         res.status(500).send(err);
//     }
// });

// //GET 1 WEEK SALES
// router.get("/week-sales", isManager, async (req, res) => {
//     const last7Days = moment()
//         .day(moment().day() - 7)
//         .format("YYYY-MM-DD HH:mm:ss");

//     try {
//         // User MongoDB Aggregation Operations

//         const income = await Order.aggregate([
//             {
//                 $match: { createdAt: { $gte: new Date(last7Days) } },
//             },
//             {
//                 $project: {
//                     day: { $dayOfWeek: "$createdAt" },
//                     sales: "$total",
//                 },
//             },
//             {
//                 $group: {
//                     _id: "$day",
//                     total: { $sum: "$sales" },
//                 },
//             },
//         ]);

//         res.status(200).send(income);
//     } catch (err) {
//         console.log(err);
//         res.status(500).send(err);
//     }
// });

// // UPDATE ORDER
// router.put("/:id", isManager, async (req, res) => {
//     try {
//         const updatedOrders = await Order.findByIdAndUpdate(
//             req.params.id,
//             {
//                 $set: req.body,
//             },
//             {
//                 new: true,
//             }
//         );
//         res.status(200).send(updatedOrders);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// //GET USER ORDERS
// router.get("/find/:userId", isCustomer, async (req, res) => {
//     try {
//         const orders = await Order.find({ userId: req.params.userId });
//         res.status(200).send(orders);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// router.get("/findOne/:id", auth, async (req, res) => {
//     try {
//         const order = await Order.findById(req.params.id);

//         if (req.user._id !== order.userId && !req.user.isAdmin)
//             return res.status(403).send("Access denied. Not authorized...");

//         res.status(200).send(order);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

module.exports = router;