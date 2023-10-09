const emailValidator = require("email-validator");
const signupDataValidate = (req, res, next) => {
  const { name, username, bio, email, password } = req.body;
  //Verify if every field is fullled

  if (!name || !username || !bio || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Every field is required",
    });
  }
  //verify if email is valid
  const validEmail = emailValidator.validate(email);
  if (!validEmail) {
    return res.status(400).json({
      success: false,
      message: "Enter a valid Email",
    });
  }

  next();
};

module.exports = signupDataValidate;
