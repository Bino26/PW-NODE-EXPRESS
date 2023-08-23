const express = require("express");
const connectToDb = require("./config/db.js");
const app = express();
connectToDb();
const userRoutes = require("./routes/userRoutes.js");
//Midleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);

module.exports = app;
