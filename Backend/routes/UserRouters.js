const express = require("express");
const { createUser, getUserById, getAllUsers } = require("../controllers/UserController");

const router = express.Router();
router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUserById);

module.exports = router;