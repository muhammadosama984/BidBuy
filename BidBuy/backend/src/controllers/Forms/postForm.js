
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import Form from "../../models/Form.js";
import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const PostForm = async (req, res) => {
  const error = validationResult(req);

  if (error.isEmpty()) {
    const { name, phonenumber, email, message } =
      req.body;
    
    try {
      const result = await Form.create({
        name: name,
        phonenumber: phonenumber,
        email: email,
        message: message,
      });

      res.json(
        jsonGenerate(statusCode.SUCCESS, "Form successfull", {
          form_id: result._id,
          //token: token,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
};

export default PostForm;
