import express from "express";
import { addOrderItems, getOrderbyId, updateOrderToPaid } from "../controllers";
import { protect } from "../middleware";

const router = express.Router();

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderbyId);
router.route("/:id/pay").put(protect, updateOrderToPaid);
export default router;
