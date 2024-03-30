const express = require("express")
const router = express.Router()
const {createOrder} = require("../models/order")

router.route("/").post(createOrder)