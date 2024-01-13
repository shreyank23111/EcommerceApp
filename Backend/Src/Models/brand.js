import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  merchant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Merchant',
    default: null
  },
}, {timestamps: true});

export const Brand = mongoose.model("Brand", brandSchema);