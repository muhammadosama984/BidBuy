import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import User from "../../models/User.js";
import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const getUserRole = async (req, res) => {
  const error = validationResult(req);

  try {
    if (error.isEmpty()) {
      const productArray = await User.findById(req.userId).select(["userRole"]);

      return res.json(
        jsonGenerate(statusCode.SUCCESS, "User Role of user", productArray)
      );
    }
  } catch (error) {
    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Error in userRole", error)
    );
  }
};

export default getUserRole;
