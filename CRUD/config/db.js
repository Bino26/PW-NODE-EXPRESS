const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Successful connected to the database at ${mongoose.connection.host}`
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectToDb;
