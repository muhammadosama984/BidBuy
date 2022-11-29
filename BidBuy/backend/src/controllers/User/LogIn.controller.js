import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import User from "../../models/User.js";
import { jsonGenerate } from "../../utils/helpers.js";
import { statusCode } from "../../utils/constant.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export const Login = async (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });

    if (!user) {
      return res.json(
        jsonGenerate(
          statusCode.UNPROCESSABLE_ENTITY,
          "Username or password not exists"
        )
      );
    }

    const verified = bcrypt.compareSync(password, user.password);

    if (!verified) {
      return res.json(
        jsonGenerate(
          statusCode.UNPROCESSABLE_ENTITY,
          "Username or password not exists"
        )
      );
    }
    if (!user.active) {
      return res.json(
        jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Username is deleted")
      );
    }
    const token = jwt.sign({ userId: user._id }, "sdsdsjcdfef", {
      expiresIn: "1h",
    });
    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Login Succesfull", {
        userId: user._id,
        token: token,
      })
    );
  }
  res.json(
    jsonGenerate(
      statusCode.VALIDATION_ERROR,
      "Validation Error",
      errors.mapped()
    )
  );
};
