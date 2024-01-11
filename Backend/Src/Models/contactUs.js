import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name:{
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
}, {timestamps: true});

export const ContactUs = mongoose.model("ContactUs", contactSchema);

