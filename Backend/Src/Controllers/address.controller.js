import express from "express";
import { Address } from "../Models/Address.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const userAddress = (async(req, res) =>{
  try{
    const userID = req.user._id;

    const {landmark, houseBuilding, roadArea, city, state, country, pinCode} = req.body;
   
    const address = await Address.create({
      customer: userID,
      landmark,
      houseBuilding,
      roadArea,
      city,
      state,
      country,
      pinCode
    });

    const saveAddress = await address.save();

    if(!saveAddress){
      throw new ApiError(500, "Something went wrong while saving address");
    }
    return res.status(200).json(new ApiResponse(200, saveAddress, "Address saved successfully"));
    
  } catch (error){
    const errorMessage = error.message || "An internal server error occurred. Please try again later";
    res.status(error.status || 500).json(new ApiError(error.status || 500, null, errorMessage));
  };
});

export {userAddress}
