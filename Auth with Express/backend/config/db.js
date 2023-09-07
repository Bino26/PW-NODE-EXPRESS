const mongoose = require("mongoose");

const MONGODB_URL = process.env.MONGO_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log(`Successful to the database at ${mongoose.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
