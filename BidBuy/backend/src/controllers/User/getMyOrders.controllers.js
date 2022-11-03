import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import OrdersCompleted from "../../models/OrdersCompleted.js";
import Product from "../../models/Product.js";
import User from "../../models/User.js";
import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const myOrders = async (req, res) => {
  const error = validationResult(req);

  if (error.isEmpty()) {
    try {
      const data = await OrdersCompleted.find({ seller_id: req.userId }).select(
        ["bidding_id", "seller_id", "buyer_id", "price_soldIn", "payment"]
      );
      res.json(jsonGenerate(statusCode.SUCCESS, "My Orders", data));
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

export default myOrders;
