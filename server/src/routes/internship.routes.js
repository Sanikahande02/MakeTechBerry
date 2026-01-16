import express from "express";
import {
  registerInternship,
  getAllInternships
} from "../controllers/internship.controller.js";

const router = express.Router();

router.post("/register", registerInternship);
router.get("/", getAllInternships);

export default router;
