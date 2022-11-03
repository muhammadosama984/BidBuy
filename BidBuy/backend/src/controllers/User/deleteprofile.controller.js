import { validationResult } from "express-validator";

import bcrypt from "bcrypt";

import { jsonGenerate } from "../../utils/helpers.js";
import { statusCode } from "../../utils/constant.js";
import User from "../../models/User.js";

export const deleteProfile = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = {
      name: req.body.name,
      username: req.body.username,
      password: hashPassword,
      email: req.body.email,
      active: false,
    };
    const isAdmin = await User.findById(req.userId).select("userRole");
    //console.log(isAdmin);
    if (isAdmin.userRole === "User") {
      return res.json(
        jsonGenerate(
          statusCode.SUCCESS,
          "You are not authorised to delete profile"
        )
      );
    }

    try {
      const deleted = await User.findByIdAndUpdate(
        req.query.user_id,
        {
          active: false,
        },
        {
          new: true,
          runValidators: true,
          useFindAndModify: false,
        }
      );
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Profile of the User Deleted", deleted)
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
