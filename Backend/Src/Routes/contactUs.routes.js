import { Router } from "express";
import { contactUs } from "../Controllers/contact.controller.js";
const router = Router();

router.route("/contactus").post(contactUs);

export default router;