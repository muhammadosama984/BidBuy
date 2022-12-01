import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import Product from "../../models/Product.js";
import User from "../../models/User.js";

import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const AddMyFav = async (req, res) => {
  const error = validationResult(req);
  try {
    if (error.isEmpty()) {
      const productArray = await User.findById(req.userId).select([
        "myFavourites",
      ]);
      console.log(productArray);
      const newArray = productArray.myFavourites;
      newArray.push(req.query.product_id);
      console.log(newArray);
      const updated = await User.findByIdAndUpdate(req.userId, {
        $set: {
          myFavourites: newArray,
        },
      });
      console.log(updated);
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "my favs added", updated)
      );
    }
  } catch (error) {
    return res.json(
      jsonGenerate(statusCode.SUCCESS, "my favs added failed", error)
    );
  }
};

export default AddMyFav;
