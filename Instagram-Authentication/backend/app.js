const express = require("express");
const app = express();
const connectToDb = require("./config/db");

connectToDb();

module.exports = app;
