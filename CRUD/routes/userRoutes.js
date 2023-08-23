const express = require("express");
const {
  home,
  createUser,
  getUsers,
  deleteUser,
  updateUser,
} = require("../controllers/userControllers.js");

const router = express.Router();

router.get("/", home);
router.post("/createuser", createUser);
router.get("/getusers", getUsers);
router.put("/updateuser", updateUser);
router.delete("/deleteuser/:id", deleteUser);
router.get("/*", (req, res) => {
  res.send("Route not found ");
});

module.exports = router;
