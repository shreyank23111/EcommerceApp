import { Customer } from "../Models/Customer.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = (async(req, res)=>{
  try{

    const {firstName, lastName, email, userName, password, phoneNumber} = req.body;
    if(
      [firstName, lastName, email, userName, password, phoneNumber].some((field) => field?.trim() === "")
    ){
      throw new ApiError(400, "All fields are required");
    }
    const existedUser = await Customer.findOne({
      $or: [{userName}, {email}]
    })

    if(existedUser){
      throw new ApiError(409, "User with this username and email already exist");
    }

    const customer = await Customer.create({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      userName: userName.toLowerCase()
    });

    //refresh token

    const registerCustomer = await customer.save();

    if(!registerCustomer){
      throw new ApiError(500, "Something went wrong while registering the customer")
    }

    return res.status(200).json(new ApiResponse(200, customer, "User created successfully"));

  } catch (error){
    const errorMessage = error.message || "An internal server error occurred. Please try again later";
    res.status(error.status || 500).json(new ApiError(error.status || 500, null, errorMessage));
  }
})

export {registerUser};