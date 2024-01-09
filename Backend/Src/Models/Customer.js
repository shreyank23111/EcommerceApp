import mongoose, {Schema} from "mongoose";

const customerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
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
  userName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  jwtToken: {
    type: String
  },
}, {timestamps: true})

export const Customer = mongoose.model("Customer", customerSchema);
