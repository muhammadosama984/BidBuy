import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import bidding from "../../models/bidding.js";
import Product from "../../models/Product.js";
import User from "../../models/User.js";

import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const getBiddingID = async (req, res) => {
  const error = validationResult(req);

  if (error.isEmpty()) {
    try {
      const data = await bidding
        .findOne({ product_id: req.query.product_id })
        .select([
          "product_id",
          "seller_id",
          "highestBidder",
          "start_price",
          "current_price",
          "end_time",
        ]);
      if (!data) {
        return res.json(
          jsonGenerate(statusCode.SUCCESS, "Bidding not find", data)
        );
      }
      return res.json(jsonGenerate(statusCode.SUCCESS, "Bid Showing", data));
    } catch (error) {
      return res.json(
        jsonGenerate(
          statusCode.UNPROCESSABLE_ENTITY,
          "Error is displaying products",
          error
        )
      );
    }
  }
};

export default getBiddingID;
