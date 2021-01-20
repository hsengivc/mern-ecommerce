import express from "express";
import { addOrderItems } from "../controllers";
import { protect } from "../middleware";

const router = express.Router();

router.route("/").post(protect, addOrderItems);

export default router;
