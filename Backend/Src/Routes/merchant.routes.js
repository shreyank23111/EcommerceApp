import { Router } from "express";
import { beaMerchant, deleteMerchant } from "../Controllers/merchant.controller.js";
import { authenticateUser } from "../Middlewares/Auth/authorization.js";
const router = Router();

router.route("/bemerchant").post(authenticateUser, beaMerchant);
router.route("/bemerchant").post(authenticateUser, deleteMerchant);

export default router;