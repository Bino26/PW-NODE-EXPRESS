const userModel = require("../models/userSchema");
const bcrpypt = require("bcrypt");

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
/******************************************************
 * @LOGIN
 * @route /api/auth/login
 * @method POST
 * @description verify user and send cookie with jwt token
 * @body username , password
 * @returns User Object , cookie
 ******************************************************/
const logIn = async (req, res) => {
  const { username, password } = req.body;

  try {
    //verify credentials
    const user = await userModel.findOne({ username }).select("+password");
    if (!username || !(await bcrpypt.compare(password, user.password))) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
    //create token

    const token = user.jwtToken();
    user.password = undefined;
    const cookiesOptions = {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    };
    res.cookie("token", token, cookiesOptions);
    return res.status(200).json({
      success: true,
      message: "User Successfuly Sign",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/******************************************************
 * @GETUSER
 * @route /api/auth/getuser
 * @method GET
 * @description retrieve user data from mongoDb if user is valid(jwt auth)
 * @returns User Object
 ******************************************************/

const getUser = async (req, res) => {
  const userId = req.user.id;
  try {
    const user = await userModel.findById(userId);
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/******************************************************
 * @LOGOUT
 * @route /api/auth/logout
 * @method GET
 * @description Remove the token form  cookie
 * @returns logout message and cookie without token
 ******************************************************/

const logOut = (req, res) => {
  try {
    const cookiesOptions = {
      expires: new Date(),
      httpOnly: true,
    };
    res.cookie("token", null, cookiesOptions);
    return res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { signUp, logIn, getUser, logOut };
