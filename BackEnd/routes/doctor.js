import express from "express";
import {
  updateDoctor,
  getSingleDoctor,
  getAllDoctor,
  deleteDoctor,
  getDoctorProfile,
  deleteAppointment,
  updateAppointment,
} from "./../controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js";
import { getReviewsByDoctorId } from "../controllers/reviewController.js";

const router = express.Router();

// router.use("/:doctorId/reviews", reviewRouter);

router.get(
  "/",
  getAllDoctor
);
router.get(
  "/:id",
  authenticate,
  restrict(["doctor", "patient"]),
  getSingleDoctor
);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete(
  "/:id",
  authenticate,
  restrict(["doctor", "admin"]),
  deleteDoctor
);

router.get("/profile/me", authenticate, restrict(["doctor"]), getDoctorProfile);
router.get('/:doctorId/reviews', authenticate, restrict(["doctor", "patient", "admin"]), getReviewsByDoctorId);
router.patch('/appointment/:id',authenticate, restrict(["doctor"]), updateAppointment);

export default router;
