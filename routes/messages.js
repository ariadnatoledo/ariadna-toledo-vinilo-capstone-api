import express from "express";
import { getMessagesByUsername, postMessage } from "../controllers/messagesController.js";

export default (io) => {
  const router = express.Router();

  router.get("/:username", getMessagesByUsername);

  router.post("/", (req, res) => postMessage(req, res, io));

  return router;
};




