const User = require("../models/user");
const crypto = require("crypto");
const {sendConfirmationEmail} = require("../utils/mailserver");

function generateToken() {
    return crypto.randomBytes(20).toString('hex');
}

exports.registerUser = async (user) => {
    const { name, email, password, phone, address } = user;
    const confirmationToken = generateToken();
    const confirmationExpires = Date.now() + 3600000;
    const newUser = new User({
        name,
        email,
        password,
        phone,
        address,
        confirmationToken,
        confirmationExpires,
    });
    try {
        const savedUser = await newUser.save(); 
        sendConfirmationEmail(email, confirmationToken); 
        return savedUser; 
    } catch (error) {
        throw error; 
    }
};

exports.registerFindUser = async (email) => {
    return await User.findOne({ email: email });
}