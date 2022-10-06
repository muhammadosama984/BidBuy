import mongoose from "mongoose";
import Product from "./Product.js";

const userSchema = mongoose.Schema({
  name: {
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
  //   myFavourites: [
  //     {
  //       product_id: {
  //         type: Int32Array,
  //         ref: Product
  //       },
  //     },
  //   ],
  date: {
    type: Date,
    default: Date.now,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("User", userSchema);
