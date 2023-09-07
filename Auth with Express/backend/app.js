const express = require("express");
const app = express();

const connectDB = require("./config/db.js");

connectDB();
const authRouter = require("./routes/authRoute.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(express.json()); //Body Req Middleware
app.use(cookieParser()); // Cookies
app.use(cors({ origin: [process.env.CLIENT_URL], credentials: true })); //Third-party middleware
app.use("/api/auth", authRouter); // AuthRouter

module.exports = app;
