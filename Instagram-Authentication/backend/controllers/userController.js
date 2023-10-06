const userModel = require("../models/userSchema");
const emailValidator = require("email-validator");

/******************************************************
 * @SIGNUP
 * @route /api/auth/signup
 * @method POST
 * @description singUp function for creating new user
 * @body name,username, bio,email, password, confirmPassword ,
 * @returns User Object
 ******************************************************/

const signUp = async (req, res) => {
  //create user
  try {
    const userInfo = userModel(req.body);
    const result = await userInfo.save();
    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    //verify is user is already exists
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { signUp };
