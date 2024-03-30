const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/UserRouter");
const registerRouter = require("./routes/RegisterRouter");
const loginRouter = require("./routes/LoginRouter");
const productRouter = require("./routes/ProductRouter");
const orderRouter = require("./routes/OrderRouter");
const confirmRouter = require("./routes/ConfirmRouter");

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Application listening on ${PORT} !`));

//configure mongoose
const uri = process.env.DB_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log("MongoDB connection successful..."); })
    .catch((err) => { console.log("MongoDB connection failed", err.message); });

app.use("/api/user", userRouter);
app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);
app.use("/api/confirm", confirmRouter);

module.exports = app;