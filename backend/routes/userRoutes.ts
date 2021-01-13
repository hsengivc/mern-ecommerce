import express from "express";
import { authUser, getUserProfile, registerUser } from "../controllers";
import { protect } from "../middleware";

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
