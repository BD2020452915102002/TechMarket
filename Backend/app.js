const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/UserRouters");


require("dotenv").config();

const app = express(express.json());
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

module.exports = app;