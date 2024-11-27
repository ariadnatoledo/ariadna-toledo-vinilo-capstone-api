import express from "express";
import knexConfig from "../knexfile.js";
import knexInit from "knex";

const knex = knexInit(knexConfig); 
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("Fetching all posts...");
    const posts = await knex("Posts").select(
      "postId",
      "userId",
      "content",
      "image",
      "createdAt"
    );
    console.log("Fetched posts:", posts);
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Error fetching posts." });
  }
});

router.post("/", async (req, res) => {
    const { userId, content, image } = req.body;
  
    if (!userId || !content || !image) {
      return res.status(400).json({
        success: false,
        message: "All fields (userId, content, and image) are required.",
      });
    }
  
    try {
      console.log("Creating a new post...");
  
      const [newPostId] = await knex("Posts").insert({
        userId,
        content,
        image,
        createdAt: knex.fn.now(),
      });
  
      console.log("Created new post with ID:", newPostId);
  
      res.status(201).json({
        success: true,
        message: "Post created successfully.",
        postId: newPostId,
      });
    } catch (error) {
      console.error("Error creating post:", error);
      res.status(500).json({ error: "Error creating post." });
    }
  });
  
  export default router;
  