const express = require("express");
const { createUser, getUserById, getAllUsers, updateUser } = require("../controllers/UserController");

const router = express.Router();
router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUserById).put(updateUser);

module.exports = router;