import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export const getCommentsByPost = async (req, res) => {
  const { postId } = req.params;
  try {
    const comments = await knex('Comments')
      .join('Users', 'Comments.userId', 'Users.userId') 
      .select(
        'Comments.commentId',
        'Comments.content',
        'Comments.timestamp',
        'Users.username',
        'Users.avatar' 
      )
      .where('Comments.postId', postId)
      .orderBy('Comments.timestamp', 'asc');
    res.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
};

export const addComment = async (req, res) => {
  const { postId } = req.params;
  const { userId, content } = req.body;

  console.log('Received POST request to /posts/:postId/comments');
  console.log('Request params:', req.params);
  console.log('Request body:', req.body);

  if (!userId || !content) {
    console.log('Validation failed: Missing userId or content');
    return res.status(400).json({ error: 'User ID and content are required' });
  }
  try {
    const [newComment] = await knex('Comments')
      .insert({ postId, userId, content })
      .select('*');
      console.log('New comment added:', newComment);


    res.status(201).json(newComment);
  } catch (error) {
        console.error('Error inserting comment into database:', error);
    res.status(500).json({ error: 'Failed to add comment' });
  }
};

export const deleteComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    const deletedRows = await knex('Comments').where('commentId', commentId).del();

    if (deletedRows) {
      res.status(200).json({ message: 'Comment deleted successfully' });
    } else {
      res.status(404).json({ error: 'Comment not found' });
    }
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({ error: 'Failed to delete comment' });
  }
};
