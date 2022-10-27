import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import bidding from "../../models/bidding.js";
import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const getAllCancelBiddings = async (req, res) => {
  const error = validationResult(req);

  if (error.isEmpty()) {
    try {
      const list = await bidding
        .find({ active: false })
        .select([
          "product_id",
          "seller_id",
          "highestBidder",
          "start_price",
          "current_price",
          "end_time",
        ]);
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "All Finished Biddings", list)
      );
    } catch (error) {
      return res.json(
        jsonGenerate(
          statusCode.UNPROCESSABLE_ENTITY,
          "Error is displaying biddings",
          error
        )
      );
    }
  }
};

export default getAllCancelBiddings;
