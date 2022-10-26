import mongoose from "mongoose";

const ordersCompleted = mongoose.Schema({
  order_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  bidding_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "bidding",
  },
  seller_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  buyer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  price_soldIn: {
    type: String,
    required: true,
  },
  payment: [
    {
      paymentType: {
        type: String,
        required: true,
        enum: {
          values: ["COD", "Card"],
        },
        default: "Card",
      },
      payment_date: {
        type: Date,
        required: true,
        default: Date.now(),
      },
    },
  ],
});

export default mongoose.model("OrdersCompleted", ordersCompleted);
