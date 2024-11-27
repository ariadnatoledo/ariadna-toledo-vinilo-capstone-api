import express from "express";
import knexConfig from "../knexfile.js";
import knexInit from "knex";
import multer from "multer";
import fs from "fs/promises";

const knex = knexInit(knexConfig);
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets/"); 
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName); 
  },
});
const upload = multer({ storage });

/*
 * Get all posts
 */
router.get("/", async (req, res) => {
  try {
    const posts = await knex("Posts").select("postId", "userId", "content", "image", "createdAt");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching posts." });
  }
});

/*
 * POST
 */
router.post("/", upload.single("image"), async (req, res) => {
  const { userId, content } = req.body;
  const image = req.file?.filename;

  if (!userId || !content || !image) {
    return res.status(400).json({
      success: false,
      message: "All fields (userId, content, and image) are required.",
    });
  }

  try {
    const [newPostId] = await knex("Posts").insert({
      userId,
      content,
      image: `/assets/${image}`, 
      createdAt: knex.fn.now(),
    });

    res.status(201).json({
      success: true,
      message: "Post created successfully.",
      postId: newPostId,
      image: `/assets/${image}`,
    });
  } catch (error) {
    res.status(500).json({ error: "Error creating post." });
  }
});

export default router;

/*
 * POST
 */

router.put("/:postId", async (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: "Content is required." });
  }

  try {
    const updated = await knex("Posts").where({ postId }).update({ content });

    if (updated) {
      return res.status(200).json({ success: true, message: "Post updated successfully."});
    } else {
      return res.status(404).json({ message: "Post not found."});
    }
  } catch (error) {
    console.error("Error updating post:", error)
    res.status(500).json({ error: "Error updating post." });
  }
});

/*
 * DELETE
 */

router.delete("/:postId", async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await knex("Posts").where({ postId }).first();

    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    }

    const imagePath = `.${post.image}`;
    await fs.unlink(imagePath).catch((err) => {
      console.error("Error deleting image file:", err.message);
    });

    await knex("Posts").where({ postId }).del();

    res.status(200).json({ success: true, message: "Post deleted successfully." });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "Error deleting post." });
  }
});
