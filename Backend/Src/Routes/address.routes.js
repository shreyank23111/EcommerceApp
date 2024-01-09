import { Router } from "express";
import { userAddress } from "../Controllers/address.controller.js";
import { authenticateUser } from "../Middlewares/Auth/authorization.js";
const router = Router();

router.route("/addaddress").post(authenticateUser, userAddress);

export default router;