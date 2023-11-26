import express from "express";
import {
  updateUser,
  getSingleUser,
  getAllUser,
  deleteUser,
} from "./../controllers/userController.js";
import { authenticate, restrict } from "./../auth/verfiyToken.js";

const router = express.Router();

router.get("/", authenticate, restrict(["admin"]), getAllUser);
router.get("/:id", authenticate, restrict(["admin"]), getSingleUser);
router.put("/:id", authenticate, restrict(["patient"]), updateUser);
router.delete("/:id", authenticate, restrict(["patient", "admin"]), deleteUser);

export default router;
