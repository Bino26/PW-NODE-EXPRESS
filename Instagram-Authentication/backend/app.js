const express = require("express");
const app = express();
const connectToDb = require("./config/db");
const authRouter = require("./routes/userRoute");
const cookieParser = require("cookie-parser");
const cors = require("cors");

connectToDb();

app.use(express.json());
app.use(cookieParser());

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use("/", authRouter);

module.exports = app;
