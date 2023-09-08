const userModel = require("../models/userSchema.js");
const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");

/******************************************************
 * @SIGNUP
 * @route /api/auth/signup
 * @method POST
 * @description singUp function for creating new user
 * @body name, email, password, confirmPassword
 * @returns User Object
 ******************************************************/

const signUp = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  console.log(name, email, password, confirmPassword);

  try {
    /// every field is required
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Every field is required",
      });
    }
    //validate email using npm package "email-validator"
    const validEmail = emailValidator.validate(email);
    if (!validEmail) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address 📩",
      });
    }
    /// send password not match err if password !== confirmPassword
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "password and confirm Password does not match ❌",
      });
    }
    const userInfo = userModel(req.body);
    const result = await userInfo.save();
    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Account already exists",
      });
    }
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
/******************************************************
 * @SIGNIN
 * @route /api/auth/signin
 * @method POST
 * @description verify user and send cookie with jwt token
 * @body email , password
 * @returns User Object , cookie
 ******************************************************/

const signIn = async (req, res) => {
  const { email, password } = req.body;
  // send response with error message if email or password is missing
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Every field is required",
    });
  }
  try {
    // check user exist or not
    const user = await userModel.findOne({ email }).select("+password");
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
    //Create user Token

    const token = user.jwtToken();
    user.password = undefined; //password must be undefined for avoid cracking
    const cookieOptions = {
      maxAge: 24 * 60 * 60 * 1000, //24hr
      httpOnly: true, //not able to modify  the cookie in client side
    };
    res.cookie("token", token, cookieOptions);
    res.status(200).json({
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
 * @GETUSER
 * @route /api/auth/user
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
  const cookieOptions = {
    expires: new Date(),
    httpOnly: true,
  };
  try {
    res.cookie("token", null, cookieOptions);
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

module.exports = { signUp, signIn, getUser, logOut };
