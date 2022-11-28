import { validationResult } from "express-validator";
import { jsonGenerate } from "../../utils/helpers.js";
import { statusCode } from "../../utils/constant.js";
import User from "../../models/User.js";
import bcrypt from "bcrypt";

export const updateProfile = async (req, res) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = {
      name: req.body.name,
      username: req.body.username,
      password: hashPassword,
      email: req.body.email,
      image: req.body.image,
    };

    try {
      const neweeser = await User.findByIdAndUpdate(req.userId, newUser, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
      return res.json(
        jsonGenerate(
          statusCode.SUCCESS,
          "Profile of the User Updated",
          neweeser
        )
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
