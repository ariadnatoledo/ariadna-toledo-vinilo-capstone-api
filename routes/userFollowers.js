import express from "express";
import { getFollowersAndFollowing } from "../controllers/userFollowersController.js"; 

const router = express.Router();

router.get("/users/:userId/followers", async (req, res) => {
  const { userId } = req.params;

  try {
    const data = await getFollowersAndFollowing(userId);
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching followers and following:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
