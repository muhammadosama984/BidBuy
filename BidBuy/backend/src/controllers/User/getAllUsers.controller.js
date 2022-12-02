import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import User from "../../models/User.js";
import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

export const getAllUsers = async (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    try {
      const list = await User.find({ active: true }).select([
        "firstname",
        "lastname",
        "username",
        "email",
        "date",
        "password",
      ]);
      return res.json(jsonGenerate(statusCode.SUCCESS, "All Users", list));
    } catch (error) {
      return res.json(
        jsonGenerate(
          statusCode.UNPROCESSABLE_ENTITY,
          "Error in displaying in User",
          error
        )
      );
    }
  }
};

export default getAllUsers

