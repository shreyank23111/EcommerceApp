import mongoose from "mongoose";

const merchantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  business: {
    type: String,
    trim: true,
    required: true
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
  },
  brandName: {
    type: String,
    required: true
  }
}, {timestamps: true});

export const Merchant = mongoose.model("Merchant", merchantSchema );