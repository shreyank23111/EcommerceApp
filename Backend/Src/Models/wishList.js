const mongoose = require('mongoose');

const wishListSchema = mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    default: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    default: true
  },
  isLiked: {
    type: Boolean,
    default: false
  },
}, {timestamps: true});

export const WishList = mongoose.model("WishList", wishListSchema);