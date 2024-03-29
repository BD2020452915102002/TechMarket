const Product = require("../models/product.js");

exports.createProduct = async (product) => {
    return await Product.create(product);
};

exports.getAllProducts = async () => {
    return await Product.find();
}

exports.getProductById = async (id) => {
    return await Product.findById(id);
};

exports.updateProduct = async (id, product) => {
    return await Product.findByIdAndUpdate(id, product);
}

exports.deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
}