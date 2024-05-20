const express = require("express");
const { createUser, getUserById, getAllUsers, updateUser, deleteUser, getCartByUser } = require("../controllers/UserController.js");
const { isManager, isCustomer } = require("../middleware/auth.js");

const router = express.Router();
router.route("/").get(isManager, getAllUsers).post(isManager, createUser);
router.route("/:id").get(isCustomer, getUserById).put(isCustomer, updateUser).delete(isManager, deleteUser);
router.route("/:id/cart").get(getCartByUser);
module.exports = router;