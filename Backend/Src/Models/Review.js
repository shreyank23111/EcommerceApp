
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    default: null
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    default: null
  },
  title: {
    type: String,
    trim: true
  },
  rating: {
    type: Number,
    default: 0
  },
  review: {
    type: String,
    trim: true
  }
}, {timestamps: true})

export const Review = mongoose.Model("Review", reviewSchema);