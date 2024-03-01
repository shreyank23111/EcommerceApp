import { Router } from "express";
import { authenticateUser } from "../Middlewares/Auth/authorization.js";
import { addBrand } from "../Controllers/brand.controller.js";
import { role } from "../Middlewares/Role/checkRole.js";
import { ROLES } from "../Constants/index.js";
const router = Router();

router.route("/addbrand").post(authenticateUser, role.check(ROLES.Merchant), addBrand);

export default router;