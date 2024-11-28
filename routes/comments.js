import express from "express";
import { getCommentsByPost, addComment } from "../controllers/commentsController.js";

const commentsRoute = express.Router();

commentsRoute.get("/:postId/comments", getCommentsByPost),

commentsRoute.post("/:postId/comments", addComment);

export default commentsRoute;
