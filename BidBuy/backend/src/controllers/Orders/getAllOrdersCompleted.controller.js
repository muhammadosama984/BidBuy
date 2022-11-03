import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import OrdersCompleted from "../../models/OrdersCompleted.js";
import Product from "../../models/Product.js";
import User from "../../models/User.js";

import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const getAllOrdersCompleted = async (req, res) => {
  const error = validationResult(req);

  if (error.isEmpty()) {
    try {
      const list = await OrdersCompleted.find({ active: true }).select([
        "bidding_id",
        "seller_id",
        "buyer_id",
        "price_soldIn",
        "payment",
      ]);
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
      return res.json(jsonGenerate(statusCode.SUCCESS, "All Orders", list));
    } catch (error) {
      return res.json(
        jsonGenerate(
          statusCode.UNPROCESSABLE_ENTITY,
          "Error is displaying Orders",
          error
        )
      );
    }
  }
  res.json(
    jsonGenerate(
      statusCode.VALIDATION_ERROR,
      "Validation Error",
      error.mapped()
    )
  );
};

export default getAllOrdersCompleted;
