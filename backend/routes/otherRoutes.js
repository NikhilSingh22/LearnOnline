import express from "express";
import {
  contact,
  courserequest,
  getDashboardStats,
} from "../controllers/otherController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.route("/contact").post(contact);

router.route("/courserequest").post(courserequest);

router
  .route("/admin/stats")
  .get(isAuthenticated, authorizeAdmin, getDashboardStats);

export default router;
