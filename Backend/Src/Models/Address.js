const mongoose = require('mongoose');


const addressSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer"
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  pinCode: {
    type: Number,
    required: true
  }
})

export const Address = mongoose.model('Address', addressSchema);