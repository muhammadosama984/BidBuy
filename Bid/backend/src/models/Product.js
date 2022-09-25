import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
  price: {
    type: Int32Array,
    default: 0,
    required: true,
  },

  Date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Todo", productSchema);
