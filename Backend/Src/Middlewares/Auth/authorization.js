import jwt from "jsonwebtoken";
import { Customer } from "../../Models/Customer.js";
import { ApiError } from "../../utils/ApiError.js";
const jwtSecret = process.env.JWT_SECRET;

const authenticateUser = async(req, res, next) =>{
  try{
    const token = req.headers.authorization;

    if(!token){
      throw new ApiError(401, "Please provide token");
    }

    const decode = jwt.verify(token, jwtSecret);

    const user = await Customer.findOne({_id: decode.user});

    if (!user) {
      throw new ApiError(401, 'Unauthorized: Invalid token');
    }

    req.user = user;
    next();

  } catch (error){
    const errorMessage = error.message || 'An internal server error occurred. Please try again later';
    res.status(error.status || 500).json(new ApiError(error.status || 500, null, errorMessage));
  }
}

export {authenticateUser};