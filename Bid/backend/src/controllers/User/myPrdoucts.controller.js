import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import Product from "../../models/Product.js";
import User from "../../models/User.js";

import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const myProducts = async (req, res) => {
  const error = validationResult(req);

  if (error.isEmpty()) {
    try {
      const data = await Product.find({ user_id: req.userId }).select([
        "name",
        "description",
      ]);
      res.json(jsonGenerate(statusCode.SUCCESS, "My Posted Products", data));
    } catch (error) {
      return res.json(
        jsonGenerate(
          statusCode.UNPROCESSABLE_ENTITY,
          "Error is displaying profile",
          error
        )
      );
    }
  }
};

export default myProducts;
