import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
//maybe i need a validator for set error states

// Get all comments for a specific post
export const getCommentsByPost = async (req, res) => {
  const { postId } = req.params;
  try {
    const comments = await knex('Comments')
      .where({ postId })
      .orderBy('timestamp', 'asc');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
};

// Add a new comment to a specific post
export const addComment = async (req, res) => {
  const { postId } = req.params;
  const { userId, content } = req.body;
  if (!userId || !content) {
    return res.status(400).json({ error: 'User ID and content are required' });
  }
  try {
    const [newComment] = await knex('Comments')
      .insert({ postId, userId, content })
      .returning('*');
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
};
