import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import User from "../models/User.js";
import { jsonGenerate } from "../utils/helpers.js";

const Register = async (req, res) => {
  const error = validationResult(req);

  if (errors.isEmpty()) {
    const { name, username, password, email } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const userExist = await User.findOne({
      $or: [
        {
          email: email,
        },
        {
          username: username,
        },
      ],
    });

    if (userExist) {
      return res.json(
        jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Users already Exists")
      );
    }

    try {
      const result = await User.create({
        name: name,
        email: email,
        password: hashPassword,
        username: username,
      });

      res.json(
        jsonGenerate(statusCode.SUCCESS, "Registration successfull", {
          userId: result._id,
          token: token,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
};
