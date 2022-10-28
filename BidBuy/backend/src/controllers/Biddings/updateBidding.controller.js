import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import bidding from "../../models/bidding.js";
import Product from "../../models/Product.js";
import User from "../../models/User.js";

import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const updateBidding = async (req, res) => {
  const error = validationResult(req);
  const newUser = {
    current_bid: req.body.newBid,
  };

  if (error.isEmpty()) {
    try {
      const bid = await bidding
        .findById(req.query.bidding_id)
        .select("highestbidder, current_id");
      console.log(bid);
      if (bid.current_bid > req.body.newBid) {
        return res.json(
          jsonGenerate(
            statusCode.SUCCESS,
            "Bid is already more than that.",
            bid
          )
        );
      }
    } catch (error) {}
  }
};

export default updateBidding;
