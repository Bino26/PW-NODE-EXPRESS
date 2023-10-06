const express = require("express");
const signupDataValidate = require("../middlewares/signupDataValidate");
const { signUp, logIn } = require("../controllers/authController");
const loginDataValidate = require("../middlewares/loginDataValidate");

const router = express.Router();

router.post("/signup", signupDataValidate, signUp);
router.post("/login", loginDataValidate, logIn);
router.get("/logout");

module.exports = router;
