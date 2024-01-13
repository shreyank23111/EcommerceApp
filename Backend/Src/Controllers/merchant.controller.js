import { Merchant } from "../Models/merchant.js";
import { Customer } from "../Models/Customer.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { merchantSchema } from "../Zod/merchant.schema.js";

const beaMerchant = (async(req, res) =>{
 try{
  const customerID = req.user._id;
  const merchantData = merchantSchema.parse(req.body);

  const updateCustomer = await Customer.findByIdAndUpdate(
    customerID,
    {role: "Role.Merchant"},
    {new: true}
  );
  const existingMerchant = await Merchant.findOne({ email: updateCustomer.email });

  if (existingMerchant) {
    return res.status(400).json({ error: 'That email address is already in use.' });
  }
  const newMerchant = new Merchant({
    _id: customerID,
    name: updateCustomer.firstName + " " + updateCustomer.lastName,
    email: updateCustomer.email,
    phoneNumber: updateCustomer.phoneNumber,
    business: merchantData.business,
    brandName: merchantData.brandName
  });

  const merchant = await newMerchant.save();

  if(!merchant){
    throw new ApiError(500, "Unable to save merchant details")
  }
  return res.status(200).json(new ApiResponse(200, "Merchant created Successfully"))

 } catch(error){
    const errorMessage = error.message || "An internal server error occurred. Please try again later";
    res.status(error.status || 500).json(new ApiError(error.status || 500, null, errorMessage));
 }
})

export {beaMerchant};