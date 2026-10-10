import express from "express";
import multer from "multer";
import path from "path";
import { getVideos, getVideoById, uploadVideo } from "../controllers/videoController.js";

const router = express.Router();

const uploadsDir = path.resolve("uploads");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({
  storage,
  limits: {
    fileSize: 100 * 1024 * 1024,
  },
});

// Routes
router.get("/", getVideos);
router.get("/:id", getVideoById);
router.post("/", upload.single("video"), uploadVideo);

export default router;
