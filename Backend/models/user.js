const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 30 },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024
  },
  phone: {
    type: String,
    required: true,
    minlength: 9,
    maxlength: 22
  },
  address: {
    type: String,
    required: false,
    minlength: 3,
    maxlength: 1024
  },
  role: { type: String, default: "customer" },
},
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;