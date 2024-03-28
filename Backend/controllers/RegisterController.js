const register = require("../services/RegisterService");

exports.registerUser = async (req, res) => {
    try {
        if (!req.body || !req.body.email) {
            throw new Error("Email is required.");
        }
        const user = await register.registerUser(req.body);
        res.json({ data: user, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};