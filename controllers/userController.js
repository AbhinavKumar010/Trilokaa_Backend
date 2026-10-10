import Video from "../models/video.js";

export const getUserVideos = async (req, res) => {
  try {
    const { id } = req.params;

    const videos = await Video.find({
      $or: [{ uploaderId: id }, { uploaderId: String(id) }],
    }).sort({ createdAt: -1 });

    return res.json({ videos: videos || [] });
  } catch (error) {
    console.error("Get user videos error:", error);
    return res.status(500).json({ message: "Error fetching user videos", error: error.message });
  }
};
