const User = require("../models/user.js");

exports.createUser = async (user) => {
    return await User.create(user);
};

exports.getUserById = async (id) => {
    return await User.findById(id);
};

exports.getAllUsers = async () => {
    return await User.find();
}