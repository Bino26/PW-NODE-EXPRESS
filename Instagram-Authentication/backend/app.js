const express = require("express");
const app = express();
const connectToDb = require("./config/db");
const authRouter = require("./routes/userRoute");

app.use(express.json());
app.use("/api/auth", authRouter);

connectToDb();

module.exports = app;
