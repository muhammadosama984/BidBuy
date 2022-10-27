import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import User from "../../models/User.js";
import { jsonGenerate } from "../../utils/helpers.js";
import { statusCode } from "../../utils/constant.js";

export const getuser = async (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const username = req.body.userId;

    try {
      const list = await User.findById(req.userId)
        .select("-password")
        .populate(["name", "username", "email", "date"])
        .exec();

      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Profile of the User", list)
      );
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
  res.json(
    jsonGenerate(
      statusCode.VALIDATION_ERROR,
      "Validation Error",
      errors.mapped()
    )
  );
};
