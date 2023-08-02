const express = require("express");
const app = express();
const PORT = 3005;

app.get("/", (req, res) => {
  res.json({ msg: "I am HomePage" });
});

app.get("/about", (req, res) => {
  res.json({ msg: "I am AboutPage" });
});

app.get("/contact", (req, res) => {
  res.json({ email: "suppor#@pwskills.com" });
});
app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
