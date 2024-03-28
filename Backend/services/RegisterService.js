const User = require("../models/user");

exports.registerUser = async (user) => {
    return await User.create(user);
};