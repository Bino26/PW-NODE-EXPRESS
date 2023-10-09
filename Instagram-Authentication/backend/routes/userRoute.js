const express = require("express");
const signupDataValidate = require("../middlewares/signupDataValidate");
const { signUp, logIn, logOut } = require("../controllers/authController");
const loginDataValidate = require("../middlewares/loginDataValidate");
const authenticateUser = require("../middlewares/authenticateUser");

const router = express.Router();

router.post("/signup", signupDataValidate, signUp);
router.post("/login", loginDataValidate, logIn);
router.get("/getuser", authenticateUser);
router.get("/logout", logOut);

module.exports = router;
