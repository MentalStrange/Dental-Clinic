import express from "express";
import {
  updateDoctor,
  getSingleDoctor,
  getAllDoctor,
  deleteDoctor,
} from "./../controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verfiyToken.js";

const router = express.Router();

router.get("/", authenticate, restrict(["admin"]), getAllDoctor);
router.get("/:id", authenticate, getSingleDoctor);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete(
  "/:id",
  authenticate,
  restrict(["doctor", "admin"]),
  deleteDoctor
);

export default router;
