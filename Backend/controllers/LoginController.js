const loginService = require("../services/LoginService");

exports.loginUser = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            throw new Error("Email and password are required.");
        }
        const user = await loginService.loginUser(req.body.email);
        if (!user) {
            throw new Error("Invalid email or password.");
        }
        if (user.password !== req.body.password) {
            throw new Error("Invalid email or password.");
        }
        res.json({ data: user, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};