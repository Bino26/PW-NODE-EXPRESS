const JWT = require("jsonwebtoken");
const authenticateUser = (req, res, next) => {
  const token = (req.cookie && req.cookie.token) || null;
  if (!token) {
    return res.status(400).json({
      success: false,
      message: "Invalid Credentials",
    });
  }
  try {
    const payload = JWT.verify(token, process.env.SECRET);
    req.user = { id: payload.id, email: payload.email };
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = authenticateUser;
