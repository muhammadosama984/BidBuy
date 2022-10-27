import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import Product from "../../models/Product.js";
import User from "../../models/User.js";

import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const getSingleProduct = async (req, res) => {
  const error = validationResult(req);

  if (error.isEmpty()) {
    try {
      const data = await Product.findById(req.query.id).select([
        "name",
        "description",
        "price",
        "category",
        "location",
      ]);
      if (!data) {
        return res.json(
          jsonGenerate(statusCode.SUCCESS, "Product not find", data)
        );
      }
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Product Showing", data)
      );
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
};

export default getSingleProduct;
