import { Merchant } from "../Models/merchant.js";
import { Customer } from "../Models/Customer.js";
import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const beaMerchant = (async(req, res) =>{
  const {business, brand, barndName} = req.body;
})

export {beaMerchant};