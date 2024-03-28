const userService = require("../services/UserService");

exports.createUser = async (req, res) => {
    try {
        console.log(req.body);
        if (!req.body || !req.body.email) {
            throw new Error("Email is required.");
        }
        const user = await userService.createUser(req.body);
        res.json({ data: user, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        res.json({ data: user, status: "success"});
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json({ data: users, status: "success"});
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        res.json({ data: user, status: "success" });
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = userService.deleteUser(req.params.id);
        res.json({ data: user, status: "success" });
    } catch(err) {
        res.status(500).json({ error: err.message })
    }
}
