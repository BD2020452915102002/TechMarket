const User = require("../models/user");

exports.registerUser = async (user) => {
    return await User.create(user);
};

exports.registerFindUser = async (email) => {
    return await User.findOne({ email: email });
}