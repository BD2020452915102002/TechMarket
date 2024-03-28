const User = require("../models/user.js");

exports.createUser = async (user) => {
    return await User.create(user);
};

exports.getAllUsers = async () => {
    return await User.find();
}

exports.getUserById = async (id) => {
    return await User.findById(id);
};

exports.updateUser = async (id, user) => {
    return await User.findByIdAndUpdate(id, user);
}

exports.deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
}