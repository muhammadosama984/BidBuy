import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import Form from "../../models/Form.js";

import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const getForm = async (req, res) => {

      try {
      const list = await Form.find({ active: true }).select([
        "form_id",
        "name",
        "phonenumber",
        "email",
        "message",
      ]);
      return res.json(jsonGenerate(statusCode.SUCCESS, "Form", list));
    } catch (error) {
      return res.json(
        jsonGenerate(
          statusCode.UNPROCESSABLE_ENTITY,
          "Error is displaying form",
          error
        )
      );
    }
  };

export default getForm;
