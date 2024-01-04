import mongoose from "mongoose"

const cartSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  qt: {
    type: Number,
  },
  price: {
    type: Number,
    trim: true,
    required: true
  },
})

export const Cart = mongoose.model('Cart', cartSchema);