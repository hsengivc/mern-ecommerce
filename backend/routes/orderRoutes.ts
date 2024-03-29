import express from "express";
import {
  addOrderItems,
  getOrderbyId,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
} from "../controllers";
import { protect, isAdmin } from "../middleware";

const router = express.Router();

router.route("/").post(protect, addOrderItems).get(protect, isAdmin, getOrders);
router.route("/myorders").get(protect, getMyOrders);
router.route("/:id").get(protect, getOrderbyId);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, isAdmin, updateOrderToDelivered);

export default router;
