import express from "express";
import knexConfig from "../knexfile.js";
import knexInit from "knex"; 

const knex = knexInit(knexConfig); 
const router = express.Router();

router.get("/:userId/followers", async (req, res) => {
    const { userId } = req.params;
  
    try {
      const followers = await knex("UserFollowers")
        .where("followedId", userId)
        .count("id as count")
        .first();
  
      const following = await knex("UserFollowers")
        .where("followerId", userId)
        .count("id as count")
        .first();
  
      res.status(200).json({
        followers: followers.count,
        following: following.count,
      });
    } catch (error) {
      console.error("Error fetching follower/following counts:", error);
      res.status(500).json({ error: "Failed to fetch follow data." });
    }
  });
  
  export default router;
