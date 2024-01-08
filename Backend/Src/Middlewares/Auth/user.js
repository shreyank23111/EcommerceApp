import { ApiError } from "../../utils/ApiError.js";
import { signupSchema } from "../../Zod/auth.schema.js";

const validUserData = (req, res, next) => {

  const { firstName, lastName, password, email, userName, phoneNumber } = req.body;
  if(!firstName || !lastName || !password || !email || !userName || !phoneNumber){
    throw new ApiError(500, "All fields are required")
  };

  const validData = signupSchema.safeParse(req.body)
  if(!validData.success){
    throw new ApiError(500, JSON.stringify(validData.error) || "Please enter valid details")
  };
  req.validUserData = validData.data;
  next();
}

export {validUserData};
