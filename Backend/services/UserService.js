const User = require("../models/user.js");

exports.createUser = async (user) => {
    return await User.create(user);
};

exports.getUserById = async (id) => {
    return await User.findOne({ userId: id });
};

exports.getAllUsers = async () => {
    return await User.find();
}

exports.updateUser = async (id, user) => {
    return await User.findOneAndUpdate({ userId: id }, user, { new: true });
}

exports.deleteUser = async (id) => {
    return await User.findOneAndDelete({ userId: id });
}