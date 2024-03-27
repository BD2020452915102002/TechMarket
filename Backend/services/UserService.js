const User = require("../models/user.js");

exports.createUser = async (user) => {
    return await User.create(user);
};