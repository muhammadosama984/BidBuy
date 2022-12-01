import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import bidding from "../../models/bidding.js";
import Product from "../../models/Product.js";
import User from "../../models/User.js";

import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const startBidding = async (req, res) => {
  const error = validationResult(req);

  // new Date(Date.now()).getHours()

  if (error.isEmpty()) {
    const bidExist = await bidding.findOne({
      $or: [
        {
          product_id: req.query.product_id,
        },
      ],
    });
    // if (new Date(req.body.end_time) < Date.now()) {
    //   res.json(
    //     jsonGenerate(statusCode.SUCCESS, "End time not correct", {
    //       // bidding_id: bid._id,
    //     })
    //   );
    // }
    if (bidExist) {
      return res.json(
        jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "Bid already Exists")
      );
    }
    try {
      const bid = await bidding.create({
        product_id: req.query.product_id,
        seller_id: req.userId,
        highestBidder: req.userId,
        start_price: req.body.start_price,
        end_price: req.body.end_price,
        current_price: req.body.start_price,
        end_time: req.body.end_time,
      });

      res.json(
        jsonGenerate(statusCode.SUCCESS, "Bidding Added", {
          bidding_id: bid._id,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
};

export default startBidding;
