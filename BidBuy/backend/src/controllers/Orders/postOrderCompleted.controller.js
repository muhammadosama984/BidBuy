import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import Jwt from "jsonwebtoken";
import bidding from "../../models/bidding.js";
import OrdersCompleted from "../../models/OrdersCompleted.js";
import Product from "../../models/Product.js";
import User from "../../models/User.js";

import { statusCode } from "../../utils/constant.js";
import { jsonGenerate } from "../../utils/helpers.js";

const postOrderCompleted = async (req, res) => {
  const error = validationResult(req);

  if (error.isEmpty()) {
    try {
      const list = await bidding
        .findById(req.query.bidding_id)
        .select("seller_id, highestBidder");

      // console.log(req.body.payment);

      const result = await OrdersCompleted.create({
        bidding_id: req.query.bidding_id,
        seller_id: list.seller_id,
        buyer_id: req.userId, // list.highestBidder,
        price_soldIn: req.body.price_soldIn,
        payment: req.body.payment,
      });
      res.json(
        jsonGenerate(statusCode.SUCCESS, "Order Added", {
          order_id: result._id,
        })
      );
    } catch (error) {
      console.log(error);
    }
  }
};

export default postOrderCompleted;
