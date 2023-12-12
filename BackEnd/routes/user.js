import express from "express";
import {
  updateUser,
  getSingleUser,
  getAllUser,
  deleteUser,
  getUserProfile,
  getMyAppointment,
  createAppointment,
  createFeedback,
} from "./../controllers/userController.js";
import { authenticate, restrict } from "./../auth/verifyToken.js";

const router = express.Router();

router.get("/", authenticate, restrict(["admin"]), getAllUser);
router.get("/:id", authenticate, restrict(["patient"]), getSingleUser);
router.put("/:id", authenticate, restrict(["patient"]), updateUser);
router.delete("/:id", authenticate, restrict(["patient", "admin"]), deleteUser);

router.get("/profile/me", authenticate, restrict(["patient"]), getUserProfile);
router.get(
  "/appointments/my-appointments",
  authenticate,
  restrict(["patient"]),
  getMyAppointment
);

router.post("/appointments/createAppointment", createAppointment);
router.post("/feedback/createFeedback", createFeedback);

export default router;
