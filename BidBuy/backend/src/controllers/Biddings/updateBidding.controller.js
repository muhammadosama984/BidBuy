import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import bidding from "../../models/bidding.js";
import Product from "../../models/Product.js";
import User from "../../models/User.js";

import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const updateBidding = async (req, res) => {
  //const errors = validationResult(req);
  const newUser = {
    current_price: req.body.newBid,
    highest_bidder: req.userId,
  };

  //if (errors.isEmpty())
  try {
    const bid = await bidding
      .findById(req.query.bidding_id)
      .select("highestbidder, current_id");
    console.log(bid);
    if (bid.current_bid > req.body.newBid) {
      return res.json(
        jsonGenerate(statusCode.SUCCESS, "Bid is already more than that.", bid)
      );
    }

    const neweeser = await bidding.findByIdAndUpdate(
      req.query.bidding_id,
      newUser,
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );
    return res.json(jsonGenerate(statusCode.SUCCESS, "Bid Updated", neweeser));
  } catch (error) {
    return res.json(jsonGenerate(statusCode.SUCCESS, "Bid not Updated", error));
  }
};

export default updateBidding;
