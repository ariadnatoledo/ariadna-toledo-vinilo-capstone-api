import express from "express";
import knexConfig from "../knexfile.js";
import knexInit from "knex";
import multer from "multer";

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
 * Create a new post
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
      image: `/assets/${image}`, // Include the image path in the response
    });
  } catch (error) {
    res.status(500).json({ error: "Error creating post." });
  }
});

export default router;

