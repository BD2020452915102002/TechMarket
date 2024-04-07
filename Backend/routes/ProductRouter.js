const express = require("express")
const { createProduct, getProductById, getAllProducts, updateProduct, deleteProduct } = require("../controllers/ProductController.js");
const { isEmployee } = require("../middleware/auth.js");
const router = express.Router()

router.route("/").get(getAllProducts).post(isEmployee, createProduct);
router.route("/:id").get(getProductById).put(isEmployee, updateProduct).delete(isEmployee, deleteProduct);
module.exports = router;