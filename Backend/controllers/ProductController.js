const productService = require("../services/ProductService");
const cloudinary = require("../utils/cloudinary");

exports.createProduct = async (req, res) => {

    try {
        if (!req.body.image) {
            throw new Error("error: no image");
        }

        const uploadedResponse = await cloudinary.uploader.upload(req.body.image, {
            upload_preset: "TechMarket-Product",
        });

        if (!uploadedResponse) {
            throw new Error("error: can't upload image to cloudinary");
        }

        req.body.image = uploadedResponse;

        const product = await productService.createProduct(req.body);
        res.status(200).json({ data: product, status: "success" });
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
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        if (req.body.image) {
            const product = await productService.getProductById(req.params.id);

            if (!product) {
                return res.status(404).json({ error: "Product not found" });
            }

            if (product.image && product.image.public_id) {
                await cloudinary.uploader.destroy(product.image.public_id);
            }

            const uploadedResponse = await cloudinary.uploader.upload(req.body.image, {
                upload_preset: "TechMarket-Product",
            });

            if (!uploadedResponse) {
                throw new Error("Failed to upload image to cloudinary");
            }

            const updatedProduct = await productService.updateProduct(req.params.id, {
                $set: {
                    ...req.body,
                    image: uploadedResponse,
                },
            }, { new: true });

            res.status(200).json({ data: updatedProduct, status: "success" });
        } else {
            const updatedProduct = await productService.updateProduct(req.params.id, {
                $set: req.body,
            }, { new: true });
            res.status(200).json({ data: updatedProduct, status: "success" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.deleteProduct = async (req, res) => {
    try {
        const product = await productService.deleteProduct(req.params.id);
        res.json({ data: product, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
