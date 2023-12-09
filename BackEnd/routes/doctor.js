import express from "express";
import {
  updateDoctor,
  getSingleDoctor,
  getAllDoctor,
  deleteDoctor,
  getDoctorProfile,
} from "./../controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js";

const router = express.Router();

router.use("/:doctorId/reviews", reviewRouter);

router.get(
  "/",
  authenticate,
  restrict(["admin", "patient", "doctor"]),
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
() => {
  console.log("hello");
};
router.get("/profile/me", authenticate, restrict(["doctor"]), getDoctorProfile);

export default router;
