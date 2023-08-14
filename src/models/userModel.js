import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "please provide a username"],
    unique: true,
  },
  email: {
    type: String,
    require: [true, "please provide a email"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "please provide a password"],
    unique: true,
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: stringify,
  forgotPasswordTokenExpiry: Date, // 10 minutes
  verifyToken: stringify,
  verifyTokenExpiry: Date,
});

const user = mongoose.models.user || mongoose.model("user", userSchema);

export default user;
