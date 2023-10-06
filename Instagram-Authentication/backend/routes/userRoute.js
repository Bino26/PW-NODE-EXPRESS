const express = require("express");
const signupDataValidate = require("../middlewares/signupDataValidate");
const { signUp } = require("../controllers/userController");

const router = express.Router();

router.post("/signup", signupDataValidate, signUp);
router.post("/login");
router.get("/logout");

module.exports = router;
