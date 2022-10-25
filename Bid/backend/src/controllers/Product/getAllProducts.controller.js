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
  }
};

export default getAllProducts;