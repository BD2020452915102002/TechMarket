const register = require("../services/RegisterService");
const Joi = require("joi");
const genAuthToken = require("../utils/genAuthToken");

exports.registerUser = async (req, res) => {

    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().min(3).max(200).required().email(),
        password: Joi.string().min(8).max(1024).required(),
        phone: Joi.string().min(9).max(22).required(),
        address: Joi.string().min(3).max(1024).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    try {
        let userInDB = await register.registerFindUser(req.body.email);

        if (userInDB) return res.status(400).send("User already exist...");

        const user = await register.registerUser(req.body);

        const token = genAuthToken(user);

        res.status(200).send(token);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Internal Server Error");
    }
};