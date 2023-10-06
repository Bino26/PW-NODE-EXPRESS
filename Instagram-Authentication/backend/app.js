const express = require("express");
const app = express();
const connectToDb = require("./config/db");
const authRouter = require("./routes/userRoute");
const cookieParser = require("cookie-parser");
const authenticateUser = require("./middlewares/authenticateUser");

app.use(express.json());
app.use(cookieParser());
app.use("/", authenticateUser);
app.use("/api/auth", authRouter);

connectToDb();

module.exports = app;
