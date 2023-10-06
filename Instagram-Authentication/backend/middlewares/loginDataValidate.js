const loginDataValidate = (req, res, next) => {
  const { username, password } = req.body;
  //verify if eevery field is fulled

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Every field is required",
    });
  }
  next();
};
module.exports = loginDataValidate;
