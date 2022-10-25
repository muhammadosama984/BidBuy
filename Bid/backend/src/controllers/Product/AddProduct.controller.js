import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import Product from "../../models/Product.js";
import User from "../../models/User.js";

import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const AddProduct = async (req, res) => {
  const error = validationResult(req);

  if (error.isEmpty()) {
    const { name, description, price } = req.body;

    try {
      const result = await Product.create({
        name: name,
        description: description,
        price: price,
      });

      res.json(
        jsonGenerate(statusCode.SUCCESS, "Product Added", {
          product_id: result._id,
          //token: token,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
};

export default AddProduct;
