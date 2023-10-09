const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "name must be required"],
    minLength: [3, "name must be at least 3 char"],
    maxLength: [15, "name must be less than 15 char"],
  },
  username: {
    type: String,
    required: [true, "username must be required"],
    minLength: [3, "username must be at least 3 char"],
    maxLength: [15, "username must be less than 15 char"],
    unique: [true, "username must be unique"],
  },
  email: {
    type: String,
    required: [true, "email must be required"],
    unique: [true, "email has already registred"],
  },
  password: {
    type: String,
    required: [true, "password must be required"],
  },
  bio: {
    type: String,
    required: [true, "bio must be required"],
    minLength: [3, "bio must be at least 3 char"],
    maxLength: [30, "bio must be less than 15 char"],
  },
});
{
  timestamps: true;
}
//hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) next();
  this.password = await bcrypt.hash(this.password, 10);
});

//Method for generate token
userSchema.methods = {
  jwtToken() {
    return JWT.sign(
      {
        id: this._id,
        email: this.email,
        username: this.username,
        bio: this.bio,
      },
      process.env.SECRET,
      {
        expiresIn: "24h",
      }
    );
  },
};

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
