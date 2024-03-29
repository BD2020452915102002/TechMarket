const productService = require("../services/ProductService");

exports.createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.json({ data: product, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        res.json({ data: product, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const product = await productService.getAllProducts();
        res.json({ data: product, status: "success" });
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const product = await productService.updateProduct(req.params.id, req.body);
        res.json({ data: product, status: "success" });
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const product = await productService.deleteProduct(req.params.id);
        res.json({ data: product, status: "success" });
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}
