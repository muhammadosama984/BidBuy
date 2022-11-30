import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import Product from "../../models/Product.js";
import User from "../../models/User.js";

import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const getAllProducts = async (req, res) => {
  const error = validationResult(req);

  if (error.isEmpty()) {
    try {
      const list = await Product.find({ active: true }).select([
        "name",
        "user_id",
        "description",
        "price",
        "category",
        "location",
        "image",
      ]);
      return res.json(jsonGenerate(statusCode.SUCCESS, "All products", list));
    } catch (error) {
      return res.json(
        jsonGenerate(
          statusCode.UNPROCESSABLE_ENTITY,
          "Error is displaying products",
          error
        )
      );
    }
  }
  res.json(
    jsonGenerate(
      statusCode.VALIDATION_ERROR,
      "Validation Error",
      error.mapped()
    )
  );
};

export default getAllProducts;
