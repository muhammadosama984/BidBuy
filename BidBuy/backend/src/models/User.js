import mongoose from "mongoose";
import Product from "./Product.js";

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  username: {
    type: String,
    min: 6,
    max: 32,
    required: true,
  },

  password: {
    type: String,
    min: 6,
    max: 32,
    required: true,
  },
  email: {
    type: String,
    min: 6,
    max: 32,
    required: true,
    unique: "Email already exists",
  },
  image: {
    type: String,
    default: "",
  },
  myFavourites: [],
  date: {
    type: Date,
    default: Date.now,
  },
  active: {
    type: Boolean,
    default: true,
  },
  userRole: {
    type: String,
    required: true,
    default: "User",
  },
});

export default mongoose.model("User", userSchema);
