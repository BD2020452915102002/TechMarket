const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 200
    },
    desc: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: [String],
        required: true
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    images: [String],
},
    { timestamps: true });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;