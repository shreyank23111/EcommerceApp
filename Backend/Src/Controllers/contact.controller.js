
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ContactUs } from "../Models/contactUs.js";

const contactUs = (async(req, res) =>{
  try{
    const {name, email, message} = req.body;

    if(!email){
      throw new ApiError(400, "You must enter a email");
    }
    if(!name){
      throw new ApiError(400, "You must enter a name");
    }
    if(!message){
      throw new ApiError(400, "You must enter a message")
    }

    const existingContact = await ContactUs.findOne({email});

    if(existingContact){
      return res.status(200).json(new ApiResponse(200, "A request already existed for this user"));
    }

    const contact = await ContactUs.create({
      name, 
      email,
      message
    });
    return res.status(200).json(new ApiResponse(200, `We received you message, we will reach on email ${email} soon!`));

  } catch (error){
    const errorMessage = error.message || "An internal server error occurred. Please try again later";
    res.status(error.status || 500).json(new ApiError(error.status || 500, null, errorMessage));
  }
})

export {contactUs};