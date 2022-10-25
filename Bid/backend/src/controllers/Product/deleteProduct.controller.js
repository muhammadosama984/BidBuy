import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import Product from "../../models/Product.js";
import User from "../../models/User.js";
import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const deleteProduct = async (req, res) => {
  const error = validationResult(req);

  if (error.isEmpty()) {
    const newUser = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    };
    try {
      const deleted = await User.findByIdAndUpdate(
        req.product_id,
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
};

export default deleteProduct;
