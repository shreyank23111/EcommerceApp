import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      }
    ],
  },
  { timestamps: true }
);

export const Category = mongoose.model('Category', categorySchema);