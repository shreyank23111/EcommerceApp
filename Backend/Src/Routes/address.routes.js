import { Router } from "express";
import { deleteAddress, updateAddress, userAddress } from "../Controllers/address.controller.js";
import { authenticateUser } from "../Middlewares/Auth/authorization.js";
const router = Router();

router.route("/addaddress").post(authenticateUser, userAddress);
router.route("/updateaddress/:addressId").put(authenticateUser, updateAddress);
router.route("/deleteaddress/:addressId").delete(authenticateUser, deleteAddress)

export default router;