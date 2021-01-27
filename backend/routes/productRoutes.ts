import express from "express";
import { deleteProduct, getProductById, getProducts } from "../controllers";
import { isAdmin, protect } from "../middleware";

const router = express.Router();

router.route("/").get(getProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, isAdmin, deleteProduct);

export default router;
