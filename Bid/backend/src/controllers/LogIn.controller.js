import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import { jsonGenerate } from "../utils/helpers.js";
import { statusCode } from "../utils/constant.js";

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
    return res.json(
      jsonGenerate(statusCode.SUCCESS, "Login Succesfull", {
        userId: user._id,
        //token: token,
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
