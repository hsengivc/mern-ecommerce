import express from "express";
import { addOrderItems, getOrderbyId } from "../controllers";
import { protect } from "../middleware";

const router = express.Router();

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderbyId);
export default router;
