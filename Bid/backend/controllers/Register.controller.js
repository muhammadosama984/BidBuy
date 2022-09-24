import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";

const Register = async (req, res) => {
  const error = validationResult(req);
};
