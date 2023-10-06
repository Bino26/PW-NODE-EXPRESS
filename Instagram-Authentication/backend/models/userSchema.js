const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "name must be required"],
    minLength: [3, "name must be at least 3 char"],
    maxLength: [15, "name must be less than 15 char"],
  },
  username: {
    type: String,
    required: [true, "name must be required"],
    minLength: [3, "name must be at least 3 char"],
    maxLength: [15, "name must be less than 15 char"],
    unique: [true, "username must be unique"],
  },
  email: {
    type: String,
    required: [true, "name must be required"],
    unique: [true, "email has already registred"],
  },
  password: {
    type: String,
    required: [true, "name must be required"],
  },
  bio: {
    type: String,
    required: [true, "name must be required"],
    minLength: [3, "name must be at least 3 char"],
    maxLength: [30, "name must be less than 15 char"],
    unique: [true, "email has already registred"],
  },
});
{
  timestamps: true;
}

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  this.password = await bcrypt.hash(this.password, 10);
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
