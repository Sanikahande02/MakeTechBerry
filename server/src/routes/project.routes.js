import express from "express";
import {
  registerProject,
  getAllProjects
} from "../controllers/project.controller.js";
import protect from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", registerProject);
router.get("/", getAllProjects);
// Admin-only
router.get("/", protect, getAllProjects);


export default router;
