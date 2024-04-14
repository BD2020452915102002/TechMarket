const express = require("express")
const router = express.Router()
const { createOrder, getAllOrders, getOrderById, updateOrder, deleteOrder } = require("../controllers/OrderController")
const { isEmployee } = require("../middleware/auth")
const { checkOrderAccess } = require("../middleware/AccessOrder")

router.route("/").get(isEmployee, getAllOrders).post(createOrder);
router.route("/:id").get(getOrderById).put(checkOrderAccess, updateOrder).delete(isEmployee, deleteOrder);

module.exports = router;