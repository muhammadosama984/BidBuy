import mongoose from "mongoose";

const ordersCompleted = mongoose.Schema({
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
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

export default mongoose.model("OrdersCompleted", ordersCompleted);
