const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      `Successfuly connect to the database at ${mongoose.connection.host}`
    );
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectToDb;
