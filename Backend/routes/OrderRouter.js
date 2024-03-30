const express = require("express")
const router = express.Router()
const {createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder} = require("../controllers/OrderController")

router.route("/").get(getAllOrders).post(createOrder);
router.route("/:id").get(getOrderById).put(updateOrder).delete(deleteOrder);

module.exports = router;