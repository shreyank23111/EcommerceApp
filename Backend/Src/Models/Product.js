import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      required: true,
      type: String,
      trim: true
    },
    productImage: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      default: 0,
      required: true,
    },
    stock: {
      default: 0,
      type: Number,
      required: true
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Owner',
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);


