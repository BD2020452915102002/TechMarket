const express = require("express");
const { createUser } = require("../controllers/UserController");

const router = express.Router();
router.route("/").post(createUser);

module.exports = router;