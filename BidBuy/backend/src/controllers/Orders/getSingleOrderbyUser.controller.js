import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import OrdersCompleted from "../../models/OrdersCompleted.js";
import Product from "../../models/Product.js";
import User from "../../models/User.js";

import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const getSingleorderbyUser = async (req, res) => {
  try {
    const data = await OrdersCompleted.find({ buyer_id: req.userId }).select([
      "bidding_id",
      "seller_id",
      "buyer_id",
      "price_soldIn",
      "payment",
    ]);
    if (!data) {
      return res.json(jsonGenerate(statusCode.SUCCESS, "Order not find", data));
    }
    return res.json(jsonGenerate(statusCode.SUCCESS, "Order found", data));
  } catch (error) {
    return res.json(jsonGenerate(statusCode.SUCCESS, "Error in order", error));
  }
};

export default getSingleorderbyUser;
