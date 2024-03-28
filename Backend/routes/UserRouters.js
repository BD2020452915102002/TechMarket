const express = require("express");
const { createUser, getUserById, getAllUsers, updateUser, deleteUser } = require("../controllers/UserController");
const { isManager } = require("../middleware/auth.js");

const router = express.Router();
// router.route("/").get(isManager, getAllUsers).post(createUser);
// router.route("/:id").get(isManager, getUserById).put(updateUser).delete(isManager, deleteUser);
router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
module.exports = router;