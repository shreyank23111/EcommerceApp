import { Router } from "express";
import { beaMerchant } from "../Controllers/merchant.controller.js";
const router = Router();

router.route("/merchant").post(beaMerchant);

export default router;