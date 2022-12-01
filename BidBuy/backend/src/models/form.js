import mongoose from "mongoose";

const formSchema = mongoose.Schema({
  form_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  name: {
    type: String,
    min: 6,
    max: 32,
    required: true,
  },

  phonenumber: {
    type: String,
    min: 6,
    max: 32,
    required: true,
  },

  email: {
    type: String,
    min: 6,
    max: 32,
    required: true,
  },

  
  message: {
    type: String,
    min: 6,
    max: 900,
    required: true,
  },
});

export default mongoose.model("Form", formSchema);
