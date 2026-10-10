import express from "express";
import { getUserVideos } from "../controllers/userController.js";

const router = express.Router();

router.get("/:id/videos", getUserVideos);

export default router;
