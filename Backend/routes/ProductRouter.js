const express = require("express")
const { createProduct, getProductById, getAllProducts, updateProduct, deleteProduct } = require("../controllers/ProductController.js");
const router = express.Router()

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:id").get(getProductById).put(updateProduct).delete(deleteProduct);
module.exports = router;