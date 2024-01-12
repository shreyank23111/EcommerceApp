import mongoose from "mongoose";

const merchantSchema = new mongoose.Schema({
  business: {
    type: String,
    trim: true,
    required: true
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
    trim: true,
    required: true
  },
  brandName: {
    type: String,
    required: true
  }
}, {timestamps: true});

export const Merchant = mongoose.model("merchantSchema", merchantSchema );