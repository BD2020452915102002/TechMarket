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
    if (req.body.productImg) {
        try {

            const destroyResponse = await cloudinary.uploader.destroy(
                req.body.product.image.public_id
            );
            if (destroyResponse) {
                const uploadedResponse = await cloudinary.uploader.upload(
                    req.body.productImg,
                    {
                        upload_preset: "TechMarket-Product",
                    }
                );
                if (uploadedResponse) {
                    const updatedProduct = await productService.updateProduct(
                        req.params.id,
                        {
                            $set: {
                                ...req.body.product,
                                image: uploadedResponse,
                            },
                        },
                        {
                            new: true,
                        }
                    );
                    res.status(200).send(updatedProduct);
                }
            }
            // const product = await productService.updateProduct(req.params.id, req.body);
            // res.status(200).json({ data: product, status: "success" });
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    }
    else {
        try {
            const updatedProduct = await productService.updateProduct(
                req.params.id,
                {
                    $set: req.body.product,
                },
                { new: true }
            );
            res.status(200).send(updatedProduct);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const product = await productService.deleteProduct(req.params.id);
        res.json({ data: product, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
