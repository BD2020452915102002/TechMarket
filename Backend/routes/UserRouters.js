const express = require("express");
const { createUser, getUserById } = require("../controllers/UserController");

const router = express.Router();
router.route("/").post(createUser);
router.route("/:id").get(getUserById);

module.exports = router;