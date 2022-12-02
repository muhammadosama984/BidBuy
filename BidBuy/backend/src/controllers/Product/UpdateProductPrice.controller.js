import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import bidding from "../../models/bidding.js";
import Product from "../../models/Product.js";
import User from "../../models/User.js";

import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const updateProductPrice = async (req, res) => {
  const newUser = {
    price: req.body.price,
  };
  try {
    const neweeser = await Product.findByIdAndUpdate(
      req.query.product_id,
      newUser,
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Product Updated", neweeser)
    );
  } catch (error) {
    return res.json(jsonGenerate(statusCode.SUCCESS, "Product Updated", error));
  }
};

export default updateProductPrice;
