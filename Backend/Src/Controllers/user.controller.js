import { Customer } from "../Models/Customer.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { EMAIL_PROVIDER } from "../Constants/index.js";
import { signupSchema, loginSchema } from "../Zod/auth.schema.js";
import bcrypt from "bcrypt";

// import require('../Constants/index.js');
import { validUserData } from "../Middlewares/Auth/user.js";

const jwtSecret = process.env.JWT_SECRET;

const registerUser = (async(req, res)=>{
  try{

    const {firstName, lastName, email, userName, password, phoneNumber} = signupSchema.parse(req.body);
    
   
    const existedUser = await Customer.findOne({
      $or: [{email}]
    })

    if(existedUser){
      throw new ApiError(409, "User with this username and email already exist");
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const customer = await Customer.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
      userName: userName
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

const loginUser = (async(req, res) =>{
  try{
    const {email, password} = loginSchema.parse(req.body);

    const user = await Customer.findOne({email});

    if(!user || !(await bcrypt.compare(password, user.password))){
      throw new ApiError(404, "Wrong username or password");
    };

    const token =jwt.sign({
      email,
      user: user._id
    }, jwtSecret);

    user.jwtToken = token;
    await user.save();

    return res.status(200).json(new ApiResponse(200, Customer, "User logeIn successfully", token));
    
  } catch(error){
    const errorMessage = error.message || "An internal server error occurred. Please try again later";
    res.status(error.status || 500).json(new ApiError(error.status || 500, null, errorMessage));
  }
})

export {registerUser, loginUser};