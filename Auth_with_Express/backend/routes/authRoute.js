const express = require("express");
const authRouter = express.Router();
const jwtAuth = require("../middleware/jwtAuth.js");

const {
  signUp,
  signIn,
  getUser,
  logOut,
} = require("../controllers/authController");

authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);
authRouter.get("/user", jwtAuth, getUser);
authRouter.get("/logout", logOut);

module.exports = authRouter;
