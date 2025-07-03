import express from "express";
import {
  getProducts,
  createProduct,
} from "../controllers/product.controller.js";
import { protect, admin } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", protect, admin, createProduct);

export default router;
