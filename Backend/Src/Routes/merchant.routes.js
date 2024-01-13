import { Router } from "express";
import { beaMerchant } from "../Controllers/merchant.controller.js";
import { authenticateUser } from "../Middlewares/Auth/authorization.js";
const router = Router();

router.route("/bemerchant").post(authenticateUser, beaMerchant);

export default router;