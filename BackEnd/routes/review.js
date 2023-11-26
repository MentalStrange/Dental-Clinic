import express from "express";
import { getAllReviews, createReview } from "../controllers/reviewController";
import { authenticate, restrict } from "../auth/verfiyToken";

const router = express.Router();

router
  .route("/")
  .get(getAllReviews)
  .post(authenticate, restrict(["patient"]), createReview);

export default router;
