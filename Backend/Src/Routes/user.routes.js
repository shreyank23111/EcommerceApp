import { Router } from "express";
import { loginUser, registerUser } from "../Controllers/user.controller.js";
import { validUserData } from "../Middlewares/Auth/user.js";
const router = Router();

router.route("/register").post( validUserData, registerUser);
router.route("/login").post(loginUser)

export default router;