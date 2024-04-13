const User = require("../models/user");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const { sendConfirmationEmail } = require("../utils/mailserver");

function generateToken() {
    return crypto.randomBytes(20).toString('hex');
}

exports.registerUser = async (user) => {
    const { name, email, password, phone, avatar } = user;
    const confirmationToken = generateToken();
    const confirmationExpires = Date.now() + 120000;

    const salt = await bcrypt.genSalt(10);
    hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        name,
        email,
        password: hashPassword,
        phone,
        avatar,
        confirmationToken,
        confirmationExpires,
    });

    try {
        await newUser.save();
        sendConfirmationEmail(email, confirmationToken);

        const checkConfirmation = async (resolve, reject, startTime) => {
            if (Date.now() - startTime > 120000) {
                await User.findOneAndDelete({ email });
                return reject(new Error("Email confirmation timeout"));
            }

            const user = await User.findOne({ email });

            if (user && user.emailConfirmed) {
                return resolve(user);
            } else {
                setTimeout(() => checkConfirmation(resolve, reject, startTime), 5000);
            }
        };

        await new Promise((resolve, reject) => {
            checkConfirmation(resolve, reject, Date.now());
        })

        return await User.findOne({ email });
    } catch (error) {
        throw error;
    }
};

exports.registerFindUser = async (email) => {
    return await User.findOne({ email: email });
}
