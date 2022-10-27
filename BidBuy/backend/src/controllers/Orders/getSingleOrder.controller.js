import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import Product from "../../models/Product.js";
import User from "../../models/User.js";

import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const getSingleorder = async (req, res) => {
  const error = validationResult(req);

  if (error.isEmpty()) {
    try {
    } catch (error) {}
  }
};

export default getSingleorder;
