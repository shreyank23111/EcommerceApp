import { Category } from "../Models/Category.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Brand } from "../Models/brand.js";

const addBrand = (async(req, res) =>{
  try{
    const {name, description, isActive} = req.body;

    if(!description || !name){
      res.status(400).json(new ApiError(400, "Please enter name and description"));
    }

    const brand = await Brand.create({
      name,
      description,
      isActive
    });

    return res.status(200).json(new ApiResponse(200, "Brand has been created successfully"));
  } catch(error){
    const errorMessage = error.message || "Unable to create brand. Please try again later ";
    res.status(error.status || 500).json(new ApiError(error.status || 500, null, errorMessage));
  }
});

export {addBrand};