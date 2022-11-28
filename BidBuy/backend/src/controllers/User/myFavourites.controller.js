import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import Product from "../../models/Product.js";
import User from "../../models/User.js";

import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const myFavourites = async (req, res) => {
  const error = validationResult(req);
  if (error.isEmpty()) {
    const productArray = await User.findById(req.userId).select([
      "myFavourites",
    ]);

    try {
    } catch (error) {}
  }
};

export default myFavourites;
