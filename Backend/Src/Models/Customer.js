import mongoose, {Schema} from "mongoose";

const customerSchema = new Schema({
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
  role: {
    type: String,
    default: "Role.Merchant",
    enum: ["Role.Member","Role.Admin", "Role.Merchant"]
  },
  merchant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Merchant",
    default: null
  },
  jwtToken: {
    type: String
  },
}, {timestamps: true})

export const Customer = mongoose.model("Customer", customerSchema);
