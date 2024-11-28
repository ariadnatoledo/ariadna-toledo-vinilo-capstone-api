import express from "express";
import { getCommentsByPost, addComment, deleteComment } from "../controllers/commentsController.js";

const commentsRoute = express.Router();

commentsRoute.get("/:postId/comments", getCommentsByPost),

commentsRoute.post("/:postId/comments", addComment);

commentsRoute.delete("/:postId/comments/:commentId", deleteComment); 

export default commentsRoute;
