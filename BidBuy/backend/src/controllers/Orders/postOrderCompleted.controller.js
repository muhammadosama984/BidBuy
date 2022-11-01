import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import bidding from "../../models/bidding.js";
import Product from "../../models/Product.js";
import User from "../../models/User.js";

import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const postOrderCompleted = async (req, res) => {
  const error = validationResult(req);

  if (error.isEmpty()) {
    try {
      const list = bidding
        .findById(req.query.bidding_id)
        .select("seller_id, highestBidder");
    } catch (error) {}
  }
};

export default postOrderCompleted;
