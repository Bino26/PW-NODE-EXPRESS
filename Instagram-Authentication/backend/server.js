require("dotenv").config();
const app = require("./app");
const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`Server is listenning at ${PORT}`);
});
