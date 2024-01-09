const mongoose = require('mongoose');


const addressSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer"
  },
  landmark: {
    type: String,
  },
  houseBuilding: {
    type: String,
    required: true
  },
  roadArea: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    default: "INDIA",
  },
  pinCode: {
    type: Number,
    required: true
  }
})

export const Address = mongoose.model('Address', addressSchema);