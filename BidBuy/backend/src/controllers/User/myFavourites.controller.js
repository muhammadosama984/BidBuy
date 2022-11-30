import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import Product from "../../models/Product.js";
import User from "../../models/User.js";

import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const myFavourites = async (req, res) => {
  const error = validationResult(req);

  try {
    if (error.isEmpty()) {
      const productArray = await User.findById(req.userId).select([
        "myFavourites",
      ]);

      return res.json(
        jsonGenerate(statusCode.SUCCESS, "my favs", productArray)
      );
    }
  } catch (error) {
    res.json(
      jsonGenerate(
        statusCode.UNPROCESSABLE_ENTITY,
        "Error is displaying my favs",
        error
      )
    );
  }
};
export default myFavourites;
