require("dotenv").config();
const app = require("./app.js");
const PORT = process.env.PORT || 6000;

const onlistening = () => {
  console.log(`Server is running at ${PORT}`);
};
app.listen(PORT, onlistening);
