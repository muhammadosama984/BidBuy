import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import bidding from "../../models/bidding.js";
import Product from "../../models/Product.js";
import User from "../../models/User.js";

import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

// everytime new bid is posted

const cancelBiddings = async (req, res) => {
  const error = validationResult(req);

  if (error.isEmpty()) {
    try {
      const deleted = await bidding.findByIdAndUpdate(req.query.bidding_id, {
        active: false,
      });
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Bidding is Deleted", deleted)
      );
    } catch (error) {
      return res.json(
        jsonGenerate(
          statusCode.UNPROCESSABLE_ENTITY,
          "Error in deleting bidding",
          error
        )
      );
    }
  }
};

export default cancelBiddings;
