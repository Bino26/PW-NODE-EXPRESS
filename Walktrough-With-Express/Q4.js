const express = require("express");
const app = express();
const PORT = 3006;

app.get("/random", (req, res) => {
  res.json({ random: Math.random() });
});

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
